/* eslint-disable no-undef */
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/Footer";
import ScrollToTopComponent from "../component/scroll/ScrollToTop";
import Banner from "../pages/Home/Banner/Banner";
import { Transition } from "@headlessui/react";
import facebook from "../assets/sideIcon/facebook.png";
import whatsapp from "../assets/sideIcon/whatsapp.png";
import call from "../assets/sideIcon/call.png";
const Main = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const excludeRoute = ["login", "register"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ScrollToTopComponent>
      {!excludeRoute.includes(path) && <Banner />}
      {/* The button to open modal */}
      <div style={{ display: path === "booking" ? "none" : "" }}>
        <div
          className=" flex flex-col gap-2
fixed top-[50%] right-0 transform -translate-y-1/3
"
        >
          <div className="">
            <Transition
              show={isOpen}
              enter="transition-transform duration-300 ease-out"
              enterFrom="transform translate-y-full"
              enterTo="transform translate-y-0"
              leave="transition-transform duration-300 ease-in"
              leaveFrom="transform translate-y-0"
              leaveTo="transform translate-y-full"
            >
              <div className=" h-52  w-20 mt-[-195px] mb-[-14px] ">
                {/* Content of the revealed section */}
                <label
                  htmlFor="my_modal_6"
                  className=" shadow-lg p-2  block rounded-l-lg bg-slate-100"
                >
                  <img src={whatsapp} alt="" className="w-12  ml-2" />
                </label>
                <label
                  htmlFor="my_modal_6"
                  className="my-1  shadow-lg  p-2 block rounded-l-lg bg-slate-100"
                >
                  <img src={facebook} alt="" className="w-[45px] ml-2" />
                </label>
                <label
                  htmlFor="my_modal_6"
                  className="  shadow-lg p-2 block rounded-l-lg bg-slate-100"
                >
                  <img src={call} alt="" className="w-10 ml-2" />
                </label>
              </div>
            </Transition>

            <button
              className="bg-gray-300 py-2 shadow-lg pl-3 rounded-l-lg  w-20 flex "
              onClick={toggleSection}
            >
              <img src={call} alt="" className=" w-12" />
            </button>
          </div>
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle " />
        <div className="modal">
          <div className="modal-box">
            <label
              htmlFor="my_modal_6"
              className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
            <div className="modal-action"></div>
          </div>
        </div>
      </div>
      <Outlet />
      {!excludeRoute.includes(path) && <Footer />}
    </ScrollToTopComponent>
  );
};

export default Main;
