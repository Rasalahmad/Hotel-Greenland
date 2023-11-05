import React from "react";
import login from "../../assets/images/login.jpg";
import LogINForm from "../../component/Form/LogINForm";
const Login = () => {
  return (
    <div>
      <>
        <div className="lg:grid grid-cols-12 my-12 lg:mx-10   rounded-xl  mx-2 ">
          <div className=" flex items-center justify-center col-span-6 lg:mr-[20px]">
            <div className=" lg:flex hidden "></div>
            <div className="w-full bg-white p-5 card-bordered shadow-lg rounded-lg">
              <LogINForm />
            </div>
          </div>
          <div className=" col-span-6 ">
            <img src={login} alt="" srcSet="" className="w-[80%]" />
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
