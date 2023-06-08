import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "../types";

const initialState: ThemeState = {
  header: true,
  sidebar: true,
  footer: true,
  content: true,
};

export const ThemeReducer = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setHeader: (state, action: PayloadAction<boolean>) => {
      state.header = action.payload;
    },
    setContent: (state, action: PayloadAction<boolean>) => {
      state.content = action.payload;
    },
    setFooter: (state, action: PayloadAction<boolean>) => {
      state.footer = action.payload;
    },
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.sidebar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContent, setFooter, setSidebar, setHeader } =
  ThemeReducer.actions;

export default ThemeReducer.reducer;
