import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import ScrollToTopComponent from "../component/scroll/ScrollToTop";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
  return (
    <ScrollToTopComponent>
      <Banner />
      <Outlet />
      <Footer />
    </ScrollToTopComponent>
  );
};

export default Main;
