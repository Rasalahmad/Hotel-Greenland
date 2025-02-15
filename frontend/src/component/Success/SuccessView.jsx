import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useGetSingleBookingQuery } from "../../features/booking/bookingApi";
import moment from "moment";
import {
  FaCheckCircle,
  FaDownload,
  FaHome,
  FaClock,
  FaCreditCard,
  FaUser,
  FaBed,
} from "react-icons/fa";

const SuccessView = () => {
  const location = useLocation();
  const trans_id = location.pathname.split("/")[3];
  const {
    data: booking,
    isLoading,
    isError,
    error,
  } = useGetSingleBookingQuery(trans_id);

  const lastIndex = booking?.data?.bookingDates?.length - 1;

  const handleDownload = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/download-pdf",
        {
          paymentStatus: booking?.data?.paymentStatus,
          price: booking?.data?.price,
          roomName: booking?.data?.product_name,
          status: booking?.data?.paymentStatus,
          bookingDates: booking?.data?.bookingDates,
        },
        { responseType: "blob" }
      )
      .then((response) => {
        if (!response.data) {
          toast.loading("Generating your pdf. please wait...");
        }
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "booking.pdf");
        document.body.appendChild(link);
        link.click();
      });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 px-8 py-12">
            <div className="flex justify-center">
              <div className="bg-white rounded-full p-3">
                <FaCheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <h1 className="mt-6 text-center text-3xl font-bold text-white">
              Booking Confirmed!
            </h1>
            <p className="mt-2 text-center text-lg text-green-100">
              Your payment has been processed successfully
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <FaCreditCard className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Transaction ID</p>
                      <p className="font-medium text-gray-800">
                        {booking?.data?.tran_id}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaClock className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Payment Status</p>
                      <p className="font-medium text-gray-800">
                        {booking?.data?.paymentStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Booking Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <FaBed className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Room Type</p>
                      <p className="font-medium text-gray-800">
                        {booking?.data?.product_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaUser className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Guest Name</p>
                      <p className="font-medium text-gray-800">
                        {booking?.data?.cus_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <FaClock className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Stay Duration</p>
                      <p className="font-medium text-gray-800">
                        {`${moment(booking?.data?.bookingDates[0]).format(
                          "DD-MM-YYYY"
                        )}
                        ${
                          lastIndex > 0
                            ? ` to ${moment(
                                booking?.data?.bookingDates[lastIndex]
                              ).format("DD-MM-YYYY")}`
                            : ""
                        }`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Amount */}
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-800">
                    Total Amount
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {booking?.data?.price} TK
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                <FaHome className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <FaDownload className="w-5 h-5 mr-2" />
                Download Receipt
              </button>
            </div>
          </div>
          {/* Footer Message */}
          <div className="mt-12 bg-gray-100 p-10 rounded-t-lg">
            <div className="text-center">
              <p className="text-gray-600 text-lg font-medium">
                Thank you for choosing our services. <br /> Your booking
                confirmation has been sent to your email.
              </p>
              <p className="mt-2 text-gray-600 text-base">
                Have a wonderful stay!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
