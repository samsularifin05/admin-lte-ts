import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer, UtilityReducer } from "./reducers";
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";

const reducer = {
  form: formReducer,
  theme: ThemeReducer.reducer,
  utility: UtilityReducer.reducer
};

const isProduction = import.meta.env.VITE_NODE_ENV === "production";
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(isProduction ? [] : [logger]),
  devTools: false
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
