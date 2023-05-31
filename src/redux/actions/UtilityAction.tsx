import {
  UtilityAction,
  UtilityTypes,
  isLoadingType,
  modalType
} from "../types";

const toggleSidebarMenu = (value: boolean): UtilityAction => ({
  type: UtilityTypes.SIDEBAR_TOOGLE,
  payload: value
});
const setModal = (value: modalType): UtilityAction => ({
  type: UtilityTypes.OPEN_MODAL,
  payload: value
});
const screenSize = (value: string): UtilityAction => ({
  type: UtilityTypes.SCREEN,
  payload: value
});
const setLoading = (value: isLoadingType): UtilityAction => ({
  type: UtilityTypes.ISLOADING,
  payload: value
});
const stopLoading = (): UtilityAction => ({
  type: UtilityTypes.ISLOADING,
  payload: {
    content: false,
    button: false,
    tabel: false
  }
});

const utilityAction = {
  toggleSidebarMenu,
  setModal,
  setLoading,
  screenSize,
  stopLoading
};

export { utilityAction };
