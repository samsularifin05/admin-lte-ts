import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./assets/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
