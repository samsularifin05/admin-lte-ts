import { lazy } from "react";
// import { Dashboard } from './dashboard';
const PageNotFound = lazy(() => import("./404"));
const Dashboard = lazy(() => import("./dashboard"));
const Login = lazy(() => import("./login"));

export { Dashboard, Login, PageNotFound };
