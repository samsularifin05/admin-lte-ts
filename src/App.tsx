import { useSelector } from "react-redux";
import { selector, utilityAction } from "./redux";
import {
  Content,
  Header,
  Sidebar,
  Footer,
  LoadingApp,
  removeWindowClass,
  calculateWindowSize,
  addWindowClass,
  useWindowSize
} from "./components";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(selector.themes);
  const utility = useSelector(selector.utility);

  const windowSize = useWindowSize();

  useEffect(() => {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");

    const size = calculateWindowSize(windowSize.width);
    if (utility.screenSize !== size) {
      dispatch(utilityAction.screenSize(size));
    }

    if (utility.sidebarToggle && utility.screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (utility.sidebarToggle && utility.screenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!utility.sidebarToggle && utility.screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }, [dispatch, utility.screenSize, utility.sidebarToggle, windowSize]);
  return (
    <Suspense fallback={<LoadingApp />}>
      <div className="wrapper">
        {theme.header && <Header />}
        {theme.sidebar && <Sidebar />}
        {theme.content && <Content />}
        {theme.footer && <Footer />}
      </div>
    </Suspense>
  );
}

export default App;
