import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import successReducer from './slices/statusSlice';
import {
  registerAuthApi,
  counterApi,
  reviewApi,
  reviewsApi,
} from "../store/services/services";

const store = configureStore({
  reducer: {
    success: successReducer,
    [registerAuthApi.reducerPath]: registerAuthApi.reducer,
    [counterApi.reducerPath]: counterApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      registerAuthApi.middleware,
      counterApi.middleware,
      reviewApi.middleware,
      reviewsApi.middleware
    ),
});
setupListeners(store.dispatch);

export default store;