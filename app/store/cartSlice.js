// store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Helper functions to save and load from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { cartItems: [], totalQuantity: 0, totalAmount: 0 }; // Default state if nothing in localStorage
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load cart from localStorage", e);
    return { cartItems: [], totalQuantity: 0, totalAmount: 0 };
  }
};

const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.error("Could not save cart to localStorage", e);
  }
};

// Initial cart state (either from localStorage or default)
const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity; // Increase quantity if the item exists
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: newItem.quantity,
        });
      }
      state.totalQuantity += newItem.quantity;
      state.totalAmount += newItem.price * newItem.quantity;

      // Save the updated cart state to localStorage
      saveCartToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;

        // Save the updated cart state to localStorage
        saveCartToLocalStorage(state);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      // Clear cart from localStorage
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
