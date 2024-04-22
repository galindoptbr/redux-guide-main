import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseItem = (payload) => ({
  type: CartActionTypes.INCREASE_ITEM,
  payload,
});

export const decreaseItem = (payload) => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload,
})


