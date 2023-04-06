import React from "react";
import { Link } from "react-router-dom";

const SuccessView = () => {
  const nANa = "Nano";
  return (
    <div className="lg:flex justify-center items-center gap-8 lg:mx-52  mx-3  my-12">
      <div class=" w-full my-auto lg:mb-0 mb-10 ">
        <div class="bg-white p-6 rounded-xl  shadow-lg card-bordered">
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

            <div className=" text-left text-lg font-semibold mt-10">
              <p className="flex justify-between">
                Payment type
                <span>{nANa}</span>
              </p>
              <p className="flex justify-between">
                Transaction Id <span>{nANa}</span>
              </p>
              <p className="flex justify-between">
                Amount paid <span>{nANa}</span>
              </p>
              <p className="flex justify-between">
                Bank <span>{nANa}</span>
              </p>
              <p className="flex justify-between">
                Mobile <span>{nANa}</span>
              </p>
              <p className="flex justify-between">
                Email <span>{nANa}</span>
              </p>
            </div>

            <div class="py-10 text-center">
              <Link
                to="/"
                class="px-12 bg-gray-600 hover:bg-gray-500 rounded-lg text-white font-semibold py-3"
              >
                GO BACK
              </Link>
              <p class="text-gray-600 my-2 mt-8">
                Thank you for completing your secure online payment.
              </p>
              <p> Have a great day! </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className=" w-[800px] "
          src="https://www.pngmart.com/files/7/Payment-PNG-Free-Download.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default SuccessView;
