import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/Footer";
import ScrollToTopComponent from "../component/scroll/ScrollToTop";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const excludeRoute = ["login", "register"];
  return (
    <ScrollToTopComponent>
      {!excludeRoute.includes(path) && <Banner />}

      <Outlet />

      {!excludeRoute.includes(path) && <Footer />}
    </ScrollToTopComponent>
  );
};

export default Main;
