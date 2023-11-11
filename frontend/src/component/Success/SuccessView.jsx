import moment from "moment";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useGetSingleBookingQuery } from "../../features/booking/bookingApi";

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
        "https://api.hotelgreenlandbd.com/api/download-pdf",
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

  return (
    <div className="lg:flex justify-center items-center gap-8 lg:mx-52  mx-3  my-12 ">
      <div class=" w-full my-auto lg:mb-0 mb-10 lg:w-[600px]  shadow-xl rounded-xl">
        <div class="bg-white p-6">
          <svg
            viewBox="0 0 24 24"
            class="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          {isLoading ? (
            "Loading..."
          ) : (
            <div class="text-center">
              <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Done!
              </h3>

              <div className=" text-left text-lg font-semibold mt-10">
                <p className="flex justify-between">
                  Transaction ID
                  <span>{booking?.data?.tran_id}</span>
                </p>
                <p className="flex justify-between">
                  Payment type
                  <span>{booking?.data?.paymentStatus}</span>
                </p>
                <p className="flex justify-between">
                  Amount
                  <span>{booking?.data?.price}</span>
                </p>
                <p className="flex justify-between">
                  Room <span>{booking?.data?.product_name}</span>
                </p>
                <p className="flex justify-between">
                  Name <span>{booking?.data?.cus_name}</span>
                </p>
                <p className="flex justify-between">
                  Booking Dates{" "}
                  <span>
                    {moment(booking?.data?.bookingDates[0]).format(
                      "DD-MM-YYYY"
                    )}
                    {lastIndex > 0 &&
                      ` to ${moment(
                        booking?.data?.bookingDates[lastIndex * 1]
                      ).format("DD-MM-YYYY")}`}
                  </span>
                </p>
              </div>

              <div className="py-2 text-center">
                <div className="flex justify-between gap-2 lg:gap-0">
                  <Link
                    to="/"
                    className="px-12 bg-green-400 hover:bg-green-500 rounded-lg text-white font-semibold py-3"
                  >
                    GO BACK
                  </Link>
                  <button
                    onClick={handleDownload}
                    className=" px-12 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold py-3"
                  >
                    Download Pdf
                  </button>
                </div>
                <p className="text-gray-600 mt-2">
                  Thank you for completing your secure online payment.
                </p>
                <p> Have a great day! </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
