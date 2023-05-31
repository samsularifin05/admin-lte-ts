/* eslint-disable @typescript-eslint/no-explicit-any */
interface modalType {
  isModalShow: boolean;
  isEdit: boolean;
  data: any;
}
interface isLoadingType {
  content?: boolean;
  button?: boolean;
  tabel?: boolean;
}
interface UtilityState {
  sidebarToggle: boolean;
  screenSize: string;
  modalShow: modalType;
  modalHide: modalType;
  setLoading: isLoadingType;
  stopLoading: isLoadingType;
}

enum UtilityTypes {
  SIDEBAR_TOOGLE = "SIDEBAR_TOOGLE",
  SCREEN = "SCREEN",
  OPEN_MODAL = "OPEN_MODAL",
  PROGRES = "PROGRES",
  ISLOADING = "ISLOADING"
}

interface sidebarToggle {
  type: UtilityTypes.SIDEBAR_TOOGLE;
  payload: boolean;
}
interface screen {
  type: UtilityTypes.SCREEN;
  payload: string;
}
interface modal {
  type: UtilityTypes.OPEN_MODAL;
  payload: modalType;
}
interface loading {
  type: UtilityTypes.ISLOADING;
  payload: isLoadingType;
}
interface progres {
  type: UtilityTypes.PROGRES;
  payload: isLoadingType;
}

type UtilityAction = screen | sidebarToggle | modal | loading | progres;

// eslint-disable-next-line react-refresh/only-export-components
export type { UtilityState, UtilityAction, modalType, isLoadingType };
export { UtilityTypes };
