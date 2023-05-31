import { UtilityAction, UtilityState, UtilityTypes } from "../types";

const initialState: UtilityState = {
  modalShow: {
    isModalShow: false,
    isEdit: false,
    data: []
  },
  sidebarToggle: false,
  screenSize: "0",
  modalHide: { isModalShow: false, isEdit: false, data: [] },
  setLoading: { content: false, button: false, tabel: false },
  stopLoading: { content: false, button: false, tabel: false }
};

const UtilityReducer = (
  state: UtilityState = initialState,
  action: UtilityAction
): UtilityState => {
  switch (action.type) {
    case UtilityTypes.SCREEN:
      return {
        ...state,
        screenSize: action.payload
      };
    case UtilityTypes.OPEN_MODAL:
      return {
        ...state,
        modalShow: action.payload
      };
    case UtilityTypes.SIDEBAR_TOOGLE:
      return {
        ...state,
        sidebarToggle: action.payload
      };
    case UtilityTypes.ISLOADING:
      return {
        ...state,
        setLoading: action.payload
      };
    default:
      return state;
  }
};

export default UtilityReducer;
