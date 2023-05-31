import ReducerType from "../types/ReducerType";

const themes = (state: ReducerType) => state.theme;
const utility = (state: ReducerType) => state.utility;

const selector = {
  themes,
  utility
};

export { selector };
