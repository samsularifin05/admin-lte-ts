import { RootState } from "../store";

const themes = (state: RootState) => state.theme;
const utility = (state: RootState) => state.utility;
const datauser = (state: RootState) => state.user;

const selector = {
  themes,
  utility,
  datauser
};

export { selector };
