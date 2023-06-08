/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import InputField from "./Filed";
import {
  addWindowClass,
  calculateWindowSize,
  getItem,
  LoadingApp,
  LoadingContent,
  removeWindowClass,
  setItem,
  useWindowSize,
} from "./function";

const Button = lazy(() => import("./Button"));
const Card = lazy(() => import("./Card"));
const Col = lazy(() => import("./Col"));
const Row = lazy(() => import("./Row"));
const HeaderContent = lazy(() => import("./HeaderContent"));
const PanelContent = lazy(() => import("./PanelContent"));
import {
  Toast,
  NotifSuccess,
  NotiWarning,
  NotifEror,
  NotifInfo,
} from "./Toast";
import ReanderField from "./Filed";
export {
  ReanderField,
  addWindowClass,
  calculateWindowSize,
  removeWindowClass,
  useWindowSize,
  LoadingApp,
  NotifSuccess,
  NotiWarning,
  NotifEror,
  NotifInfo,
  Toast,
  LoadingContent,
  Button,
  getItem,
  setItem,
  InputField,
  Col,
  Row,
  PanelContent,
  HeaderContent,
  Card,
};
