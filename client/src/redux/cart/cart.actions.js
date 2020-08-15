import CartActionTypes from './cart.types';

import { getUserCartRef } from '../../firebase/firebase.utils';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// export const addItem = item => ({
//   type: CartActionTypes.ADD_ITEM,
//   payload: item,
// });
export const addItem = item => {
  return dispatch => {
    dispatch(addItemStart(item));
    //dispatch(updateCartStartAsync());
  };
};

export const addItemStart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const updateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE,
});

export const fetchCartSuccess = cartItems => ({
  type: CartActionTypes.FETCH_CART_SUCCESS,
  payload: cartItems,
});

export const fetchCartFailure = errorMessage => ({
  type: CartActionTypes.FETCH_CART_FAILURE,
  payload: errorMessage,
});

export const fetchCartStart = () => ({
  type: CartActionTypes.FETCH_CART_START,
});

export const fetchCartStartAsync = userId => {
  return dispatch => {
    dispatch(fetchCartStart());

    getUserCartRef(userId)
      .then(cartRef => {
        cartRef.get().then(cartSnapshot => {
          dispatch(fetchCartSuccess(cartSnapshot.data().cartItems));
        });
      })
      .catch(error => dispatch(fetchCartFailure(error.message)));
  };
};

export const updateCartSuccess = cartItems => ({
  type: CartActionTypes.UPDATE_CART_SUCCESS,
  payload: cartItems,
});

export const updateCartFailure = errorMessage => ({
  type: CartActionTypes.UPDATE_CART_FAILURE,
  payload: errorMessage,
});

export const updateCartStart = () => ({
  type: CartActionTypes.UPDATE_CART_START,
});

export const updateCartStartAsync = (cartItems, currentUser) => {
  return dispatch => {
    if (currentUser) {
      dispatch(updateCartStart());
      getUserCartRef(currentUser.id)
        .then(cartRef => {
          if (cartItems.length) {
            cartRef.update({ cartItems });
            dispatch(updateCartSuccess);
          }
        })
        .catch(error => dispatch(updateCartFailure(error.message)));
    }
  };
};
