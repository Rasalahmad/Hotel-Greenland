import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetSingleBookingQuery } from "../../features/booking/bookingApi";
import Lottie from "react-lottie-player";
import lottieJson from "./cancel-animation.json"; // Use an appropriate Lottie animation for cancellation

const CancelView = () => {
  const location = useLocation();
  const trans_id = location.pathname.split("/")[3];

  const {
    data: booking,
    isLoading,
    isError,
  } = useGetSingleBookingQuery(trans_id);

  return (
    <div className="lg:flex justify-center items-center gap-8 lg:mx-52  mx-3  my-12">
      <div className="w-full my-auto lg:mb-0 mb-10 lg:w-[600px] shadow-xl rounded-xl">
        <div className="bg-white p-6">
          <div className="flex justify-center">
            <Lottie
              loop
              animationData={lottieJson}
              play
              className="w-[90px] lg:w-[150px] my-3 text-center"
            />
          </div>
          {isLoading ? (
            "Loading..."
          ) : (
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Canceled!
              </h3>
              <p className="text-gray-600 mt-2">
                Your payment process was canceled.
              </p>
              <p className="text-gray-600">
                If this was a mistake, you can try again.
              </p>

              <div className="text-left text-lg font-semibold mt-10">
                <p className="flex justify-between">
                  Transaction ID <span>{booking?.data?.tran_id}</span>
                </p>
                <p className="flex justify-between">
                  Payment Status <span>{booking?.data?.paymentStatus}</span>
                </p>
                <p className="flex justify-between">
                  Room <span>{booking?.data?.product_name}</span>
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
                  <Link
                    to="/retry-payment"
                    className="px-12 bg-red-600 hover:bg-red-500 rounded-lg text-white font-semibold py-3"
                  >
                    Retry Payment
                  </Link>
                </div>
                <p className="text-gray-600 mt-2">
                  Need help? Contact support.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CancelView;
