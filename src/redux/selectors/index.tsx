import { RootState } from "../store";

const themes = (state: RootState) => state.theme;
const utility = (state: RootState) => state.utility;

const selector = {
  themes,
  utility,
};

export { selector };
