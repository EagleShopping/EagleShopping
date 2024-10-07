import { Iproducts } from '@/interface/Iproducts';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [] as Iproducts[],
  quantity: 0 
};
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, action) => {

      const productExists = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productExists) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
        ? { ...product, quantity: product.quantity + 1 }
        : product)
        
        return;
      } 

      state.products.push({ ...action.payload, quantity: 1 });

    },

    increaseProducts: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
  
    },

    decreaseProducts: (state, action) => {
      state.products = state.products.reduce<Iproducts[]>((acc, product) => {
        if (product.id === action.payload.id) {
          if (product.quantity > 1) {
            acc.push({ ...product, quantity: product.quantity - 1 });
          }
        } else {
          acc.push(product);
        }
        return acc;
      }, []);
    },

    removeProducts: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    }
  },
}); 

export const { addProducts,decreaseProducts,increaseProducts,removeProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
