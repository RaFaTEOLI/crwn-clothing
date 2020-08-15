import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';

import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCartItems } from './redux/cart/cart.selectors';
import {
  fetchCartStartAsync,
  updateCartStartAsync,
} from './redux/cart/cart.actions';
// import { selectCollectionForPreview } from './redux/shop/shop.selectors';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({
  setCurrentUser,
  currentUser,
  cartItems,
  fetchCartStartAsync,
  updateCartStartAsync,
}) => {
  useEffect(() => {
    const unsubscriberFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      // Function to automatically insert each collection item into firebase
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
      return () => {
        unsubscriberFromAuth();
      };
    });
  }, [setCurrentUser]);

  // Updates User's Cart In Firebase Whenever The Items Change
  useEffect(() => {
    updateCartStartAsync(cartItems, currentUser);
  }, [updateCartStartAsync, cartItems, currentUser]);

  // Fetchs the cart items from firebase
  useEffect(() => {
    const initializeCart = () => {
      if (currentUser) {
        fetchCartStartAsync(currentUser.id);
      }
    };
    initializeCart();
  }, [fetchCartStartAsync, currentUser]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  // collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateCartStartAsync: (cartItems, currentUser) =>
    dispatch(updateCartStartAsync(cartItems, currentUser)),
  fetchCartStartAsync: currentUser =>
    dispatch(fetchCartStartAsync(currentUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
