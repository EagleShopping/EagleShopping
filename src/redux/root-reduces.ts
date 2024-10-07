import { combineReducers } from '@reduxjs/toolkit';
import { productReducer } from './products/slice';
import { selectProductsCount } from './products/cartSelection'

const rootReducer = combineReducers({
  products: productReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;