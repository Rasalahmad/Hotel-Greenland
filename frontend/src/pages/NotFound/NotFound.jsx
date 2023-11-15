import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import lottieJson from "./Animation - 1700047094124.json";
const NotFound = () => {
  return (
    <div
      data-theme="bumblebee"
      className="min-h-screen flex justify-center flex-col items-center"
    >
      <div className="max-w-[400px] mx-auto">
        <Lottie
          loop
          animationData={lottieJson}
          play
          className="w-[350px] lg:w-[450px] my-3"
        />
      </div>
      <div className="text-center pt-10 flex flex-col justify-center items-center lg:ml-28">
        <h1 className="font-semibold text-5xl">Ops...</h1>
        <h1 className="text-4xl ">Page not Found.</h1>
        <Link to="/">
          <p className="flex mt-4 justify-center w-60 mx-auto btn border-2 rounded-2xl bg-transparent  hover:text-white hover:border-white">
            Back to home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
