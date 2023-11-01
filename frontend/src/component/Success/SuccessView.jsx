import moment from "moment";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const SuccessView = () => {
  // const { state } = useLocation();
  // const { paymentMethod, price, roomName, status, bookingDates } =
  //   state?.booking;
  // const lastIndex = bookingDates.length - 1;

  // const handleDownload = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       "https://api.hotelgreenlandbd.com/api/download-pdf",
  //       { paymentMethod, price, roomName, status, bookingDates },
  //       { responseType: "blob" }
  //     )
  //     .then((response) => {
  //       if (!response.data) {
  //         toast.loading("Generating your pdf. please wait...");
  //       }
  //       const url = window.URL.createObjectURL(new Blob([response.data]));
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", "booking.pdf");
  //       document.body.appendChild(link);
  //       link.click();
  //     });
  // };

  return (
    <div className="lg:flex justify-center items-center gap-8 lg:mx-52  mx-3  my-12">
      <div class=" w-full my-auto lg:mb-0 mb-10 ">
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
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>

            {/* <div className=" text-left text-lg font-semibold mt-10">
              <p className="flex justify-between">
                Payment type
                <span>{paymentMethod}</span>
              </p>
              {paymentMethod !== "Cash" && (
                <p className="flex justify-between">
                  Transaction Id <span>1211653513213212</span>
                </p>
              )}
              <p className="flex justify-between">
                Amount {paymentMethod === "Cash" && "have to "} paid{" "}
                <span>{price}</span>
              </p>
              <p className="flex justify-between">
                Room <span>{roomName}</span>
              </p>
              <p className="flex justify-between">
                status <span>{status}</span>
              </p>
              <p className="flex justify-between">
                Booking Dates{" "}
                <span>
                  {moment(bookingDates[0]).format("DD-MM-YYYY")}
                  {lastIndex > 0 &&
                    ` to ${moment(bookingDates[lastIndex * 1]).format(
                      "DD-MM-YYYY"
                    )}`}
                </span>
              </p>
            </div> */}

            <div className="py-2 text-center">
              {/* <div className="flex justify-between">
                <Link
                  to="/"
                  className="px-12 bg-green-400 hover:bg-green-500 rounded-lg text-white font-semibold py-3"
                >
                  GO BACK
                </Link>
                <button
                  onClick={handleDownload}
                  className="px-12 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold py-3"
                >
                  Download Pdf
                </button>
              </div> */}
              <p className="text-gray-600">
                Thank you for completing your secure online payment.
              </p>
              <p> Have a great day! </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
