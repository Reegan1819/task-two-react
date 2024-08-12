import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteList } from "./RouteList";

const Layout = () => {
  const list = RouteList.map((route, index) => {
    return (
      <Route key={index} path={route.path} element={<route.component />} />
    );
  });

  return (
    <div>
      <Router>
        <Routes>{list}</Routes>
      </Router>
    </div>
  );
};

export default Layout;
