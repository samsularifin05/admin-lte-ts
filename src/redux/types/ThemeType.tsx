// Tipe state aplikasi
interface ThemeState {
  header: boolean;
  sidebar: boolean;
  footer: boolean;
  content: boolean;
}

// Tipe aksi Redux
enum ThemeActionTypes {
  SET_HEADER = "SET_HEADER",
  SET_SIDEBAR = "SET_SIDEBAR",
  SET_FOOTER = "SET_FOOTER",
  SET_CONTENT = "SET_CONTENT"
}

interface SetHeaderAction {
  type: ThemeActionTypes.SET_HEADER;
  payload: boolean;
}

interface SetSidebarAction {
  type: ThemeActionTypes.SET_SIDEBAR;
  payload: boolean;
}

interface SetFooterAction {
  type: ThemeActionTypes.SET_FOOTER;
  payload: boolean;
}

interface SetContentAction {
  type: ThemeActionTypes.SET_CONTENT;
  payload: boolean;
}

type ThemeAction =
  | SetHeaderAction
  | SetSidebarAction
  | SetFooterAction
  | SetContentAction;

export type { ThemeState, ThemeAction };
export { ThemeActionTypes };
