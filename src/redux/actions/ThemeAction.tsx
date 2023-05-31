import { ThemeAction, ThemeActionTypes } from "../types";

// Aksi untuk mengatur properti header
const setHeader = (value: boolean): ThemeAction => ({
  type: ThemeActionTypes.SET_HEADER,
  payload: value
});

// Aksi untuk mengatur properti sidebar
const setSidebar = (value: boolean): ThemeAction => ({
  type: ThemeActionTypes.SET_SIDEBAR,
  payload: value
});

// Aksi untuk mengatur properti footer
const setFooter = (value: boolean): ThemeAction => ({
  type: ThemeActionTypes.SET_FOOTER,
  payload: value
});

// Aksi untuk mengatur properti content
const setContent = (value: boolean): ThemeAction => ({
  type: ThemeActionTypes.SET_CONTENT,
  payload: value
});

const actionTheme = {
  setContent,
  setSidebar,
  setFooter,
  setHeader
};

export { actionTheme };
