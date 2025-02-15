import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetSingleBookingQuery } from "../../features/booking/bookingApi";
import {
  FaHome,
  FaRedo,
  FaCreditCard,
  FaBed,
  FaExclamationTriangle,
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const FailView = () => {
  const location = useLocation();
  const trans_id = location.pathname.split("/")[3];

  const {
    data: booking,
    isLoading,
    isError,
  } = useGetSingleBookingQuery(trans_id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Failure Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-12">
            <div className="flex justify-center">
              <div className="bg-white rounded-full p-3">
                <FaExclamationTriangle className="w-12 h-12 text-yellow-500" />
              </div>
            </div>
            <h1 className="mt-6 text-center text-3xl font-bold text-white">
              Payment Failed
            </h1>
            <p className="mt-2 text-center text-lg text-yellow-100">
              Your payment was unsuccessful. Please try again.
            </p>
          </div>

          {/* Booking Details */}
          <div className="px-8 py-6">
            <div className="space-y-6">
              {/* Transaction Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Transaction Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FaCreditCard className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">Transaction ID</span>
                    </div>
                    <span className="font-medium text-gray-800">
                      {booking?.data?.tran_id}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FaBed className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">Room Type</span>
                    </div>
                    <span className="font-medium text-gray-800">
                      {booking?.data?.product_name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FaCreditCard className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">Payment Status</span>
                    </div>
                    <span className="font-medium text-red-500">Failed</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <FaHome className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
                <Link
                  to="/retry-payment"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200"
                >
                  <FaRedo className="w-5 h-5 mr-2" />
                  Retry Payment
                </Link>
              </div>

              {/* Support Section */}
              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FaHeadset className="w-5 h-5 mr-2 text-blue-500" />
                  Need Assistance?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="mailto:support@hotelgreenland.com"
                    className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-white text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    <span>Email Support</span>
                  </a>
                  <a
                    href="tel:+880123456789"
                    className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-white text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <FaPhoneAlt className="w-4 h-4" />
                    <span>Call Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-12 bg-gray-100 p-10">
            <div className="text-center">
              <p className="text-gray-600 text-lg font-medium">
                We are sorry for the inconvenience. Our team is ready to assist
                you.
              </p>
              <p className="mt-2 text-gray-600 text-base">
                You can try the payment again or contact our support team for
                assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailView;
