import { createSelector } from 'reselect';

const selectCarT = state => state.cart;

export const selectCartItems = createSelector(
  [selectCarT],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
