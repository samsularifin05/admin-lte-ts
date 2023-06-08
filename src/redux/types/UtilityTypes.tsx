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

// eslint-disable-next-line react-refresh/only-export-components
export type { UtilityState, modalType, isLoadingType };
