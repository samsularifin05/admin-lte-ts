import React, { lazy } from "react";
import { Link, Route } from "react-router-dom";
import menuApps from "./menu";
const SidebarNavList = lazy(() => import("./SidebarNavList"));

const Sidebar: React.FC = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <Link to="/dashboard" className="brand-link text-center">
      <span className="brand-text font-weight-light text-center">ADMIN</span>
    </Link>
    <div
      className="sidebar-scroll-container"
      style={{ maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}
    >
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            data-accordion="false"
          >
            {newMenuAkses.map((menu: any, index: number) => (
              <Route
                path={menu.path}
                key={index}
                children={() => <SidebarNavList data={menu} key={index} />}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </aside>
  );
};

export default Sidebar;
