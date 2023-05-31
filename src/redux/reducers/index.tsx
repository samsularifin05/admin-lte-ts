import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ThemeReducers from "./ThemeReducer";
import UtilityReducer from "./UtilityReducer";

const rootReducer = combineReducers({
  form: formReducer,
  theme: ThemeReducers,
  utility: UtilityReducer
});

export default rootReducer;
