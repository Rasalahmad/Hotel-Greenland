import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/Footer";
import ScrollToTopComponent from "../component/scroll/ScrollToTop";
import Banner from "../pages/Home/Banner/Banner";
import facebook from "../assets/sideIcon/facebook.png";
import whatsapp from "../assets/sideIcon/whatsapp.png";
import call from "../assets/sideIcon/call.png";

const Main = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const excludeRoute = ["login", "register"];

  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "+8801810058005";
  const message = "Is there anyone for support?";
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  const handleWhatsAppRedirect = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <ScrollToTopComponent>
      {!excludeRoute.includes(path) && <Banner />}

      {/* Contact Sidebar */}
      <div style={{ display: path === "booking" ? "none" : "" }}>
        <div className="fixed bottom-10 right-10 flex flex-col-reverse items-end gap-2 z-50">
          {/* Call Button */}
          <button
            className="bg-green-400 rounded-full flex justify-center items-center w-12 h-12 shadow-lg hover:bg-green-500 transition-all duration-300 ease-in-out"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={call} alt="Call" className="w-6" />
          </button>

          {/* Expanded Items */}
          <div
            className={`flex flex-col gap-2 transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <div
              onClick={handleWhatsAppRedirect}
              className="cursor-pointer bg-white shadow-lg p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
            >
              <img src={whatsapp} alt="WhatsApp" className="w-8" />
            </div>
            <label
              htmlFor="my_modal_6"
              className="cursor-pointer bg-white shadow-lg p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
            >
              <img src={facebook} alt="Facebook" className="w-8" />
            </label>
            {isMobile ? (
              <a
                href={`tel:${phoneNumber}`}
                className="bg-white shadow-lg p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                <img src={call} alt="Call" className="w-8" />
              </a>
            ) : (
              <label
                htmlFor="my_modal_6"
                className="cursor-pointer bg-white shadow-lg p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                <img src={call} alt="Call" className="w-8" />
              </label>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Contact Info */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white rounded-lg shadow-xl">
          <label
            htmlFor="my_modal_6"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-gray-200 transition-all duration-300 ease-in-out"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-gray-800">Contact With Us</h3>
          <p className="py-4 text-gray-600">Phone Number: {phoneNumber}</p>
          <div className="flex justify-end">
            <label
              htmlFor="my_modal_6"
              className="btn bg-green-400 text-white hover:bg-green-500 transition-all duration-300 ease-in-out"
            >
              Close
            </label>
          </div>
        </div>
      </div>

      <Outlet />
      {!excludeRoute.includes(path) && <Footer />}
    </ScrollToTopComponent>
  );
};

export default Main;
