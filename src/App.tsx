import { useSelector } from "react-redux";
import { selector, sidebarToggle } from "./redux";
import {
  Content,
  Header,
  Sidebar,
  Footer,
  removeWindowClass,
  calculateWindowSize,
  addWindowClass,
  useWindowSize,
  LoadingContent
} from "./components";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { screenSize } from "./redux";
import Skeleton from "react-loading-skeleton";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(selector.themes);
  const utility = useSelector(selector.utility);

  const windowSize = useWindowSize();
  const handleToggleMenuSidebar = () => {
    dispatch(sidebarToggle(Boolean(!utility.sidebarToggle)));
  };

  useEffect(() => {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");

    const size = calculateWindowSize(windowSize.width);
    if (utility.screenSize !== size) {
      dispatch(screenSize(size));
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
    <Suspense fallback={<Skeleton height={"100vh"} />}>
      <div className="wrapper">
        {theme.header && <Header />}
        {theme.sidebar && <Sidebar />}
        {theme.content && <Content />}
        {theme.footer && <Footer />}
      </div>
      {utility.setLoading.content && <LoadingContent />}

      <div
        id="sidebar-overlay"
        role="presentation"
        onClick={handleToggleMenuSidebar}
        onKeyDown={() => {}}
      />
    </Suspense>
  );
}

export default App;
