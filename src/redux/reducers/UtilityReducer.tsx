import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UtilityState, isLoadingType, modalType } from "../types";

const initialState: UtilityState = {
  sidebarToggle: false,
  screenSize: "lg",
  modalShow: { isModalShow: false, isEdit: false, data: [] },
  modalHide: { isModalShow: false, isEdit: false, data: [] },
  setLoading: { content: false, button: false, tabel: false },
  stopLoading: { content: false, button: false, tabel: false }
};

export const UtilityReducer = createSlice({
  name: "Utility",
  initialState,
  reducers: {
    sidebarToggle: (state, action: PayloadAction<boolean>) => {
      state.sidebarToggle = action.payload;
    },
    screenSize: (state, action: PayloadAction<string>) => {
      state.screenSize = action.payload;
    },
    modalShow: (state, action: PayloadAction<modalType>) => {
      state.modalShow = action.payload;
    },
    modalHide: (state, action: PayloadAction<modalType>) => {
      state.modalHide = action.payload;
    },
    setLoading: (state, action: PayloadAction<isLoadingType>) => {
      state.setLoading = action.payload;
    },
    stopLoading: (state) => {
      state.setLoading = { content: false, button: false, tabel: false };
    }
  }
});

export const { sidebarToggle, screenSize, modalShow, setLoading, stopLoading } =
  UtilityReducer.actions;

export default UtilityReducer.reducer;
