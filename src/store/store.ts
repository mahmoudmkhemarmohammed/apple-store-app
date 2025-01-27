import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import singleProduct from "./products/singleProductSlice";
import homeBanner from "./homeBanner/homeBannerSlice";
import onSaleProducts from "./products/onSaleProductsSlice";
import bestSalingProducts from "./products/bestSalingProductsSlice";
import allProducts from "./products/allProductsSlice";
import cart from "./cart/cartSlice";
import wishlist from "./wishlist/wishlistSlice";
import auth from "./auth/authSlice";
import productsFilteration from "./products/productsFilterationSlice"
import orders from "./orders/ordersSlice"
import toasts from "./toasts/toastsSlice"
import account from "./account/accountSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PURGE,
  PAUSE,
  PERSIST,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "user"],
};

const rootReducer = combineReducers({
  categories,
  products,
  singleProduct,
  homeBanner,
  onSaleProducts,
  bestSalingProducts,
  allProducts,
  wishlist,
  productsFilteration,
  orders,
  toasts,
  account,
  cart: persistReducer(cartPersistConfig, cart),
  auth: persistReducer(authPersistConfig, auth),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
