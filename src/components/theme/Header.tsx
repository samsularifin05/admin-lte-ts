/* eslint-disable react-refresh/only-export-components */
import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selector, setLoading, sidebarToggle, stopLoading } from "../../redux";
import { Profile } from "../../assets";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const utility = useSelector(selector.utility);
  const handleToggleMenuSidebar = () => {
    dispatch(sidebarToggle(Boolean(!utility.sidebarToggle)));
  };
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const logout = () => {
    dispatch(
      setLoading({
        content: true
      })
    );
    setTimeout(() => {
      localStorage.clear();
      window.location.href = "/";
      dispatch(stopLoading());
    }, 300);
  };
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={handleToggleMenuSidebar}
            data-widget="pushmenu"
            aria-label="Menu Hide Bar"
            role="button"
          >
            <i className="fas fa-bars" />
          </span>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <div className="nav-item dropdown" onMouseEnter={toggleMenu}>
            <Link to="#" className="nav-link dropdown-toggle user-action">
              <img
                src={Profile}
                className="avatarProfile"
                alt="Avatar"
                height="64"
              />{" "}
              <span className="text-dark">SAM</span> <b className="caret"></b>
            </Link>
            <div
              className={`dropdown-menu ${menu ? "show" : ""}`}
              onMouseLeave={() => setMenu(false)}
            >
              <button type="button" className="dropdown-item">
                <i className="fa fa-user"></i> Profile
              </button>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => logout()}
              >
                <i className="nav-icon fas fa-arrow-right-from-bracket"></i>{" "}
                Logout
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Header);
