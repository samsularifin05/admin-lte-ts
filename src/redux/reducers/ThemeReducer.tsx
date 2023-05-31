import { ThemeAction, ThemeActionTypes, ThemeState } from "../types";

const initialState: ThemeState = {
  header: true,
  sidebar: true,
  footer: true,
  content: true
};

const ThemeReducer = (
  state: ThemeState = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.SET_HEADER:
      return {
        ...state,
        header: action.payload
      };
    case ThemeActionTypes.SET_SIDEBAR:
      return {
        ...state,
        sidebar: action.payload
      };
    case ThemeActionTypes.SET_FOOTER:
      return {
        ...state,
        footer: action.payload
      };
    case ThemeActionTypes.SET_CONTENT:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default ThemeReducer;
