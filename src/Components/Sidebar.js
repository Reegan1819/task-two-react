import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ABOUT, DASHBOARD_SETTING_PROFILE } from "../Router/RouteEndpoints";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons are imported
import "./Sidebar.css";

const Sidebar = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h1>Sidebar</h1>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <i className="bi bi-house"></i>{" "}
            <Link to="/" className="sidebar-link">
              Home
            </Link>
          </li>
          <li className="sidebar-item">
            <i className="bi bi-file-earmark-text"></i>{" "}
            <Link to={ABOUT} className="sidebar-link">
              About
            </Link>
          </li>
          <li className="sidebar-item">
            <i className="bi bi-gear"></i>{" "}
            <span onClick={toggleSettings} className="sidebar-link-toggle">
              Setting
            </span>
          </li>

          {showSettings && (
            <ul className="sidebar-sublist">
              <li className="sidebar-subitem">
                <i className="bi bi-person"></i>{" "}
                <Link to={DASHBOARD_SETTING_PROFILE} className="sidebar-link">
                  Profile
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>

      <div className="content">
        <h1>Content</h1>
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
