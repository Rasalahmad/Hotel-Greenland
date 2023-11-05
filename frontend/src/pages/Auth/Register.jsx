import React from "react";
import RegisterForm from "../../component/Form/RegisterForm";
import register from "../../assets/images/registor.avif";
const Register = () => {
  return (
    <div>
      <>
        <div className="lg:grid grid-cols-12 my-12 lg:mx-10   rounded-xl  mx-2 ">
          <div className=" col-span-6 ">
            <img src={register} alt="" srcSet="" className="w-[80%]" />
          </div>
          <div className=" flex items-center justify-center col-span-6 lg:mr-[20px]">
            <div className=" lg:flex hidden "></div>
            <div className="w-full bg-white p-5 card-bordered shadow-lg rounded-lg">
              <RegisterForm />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
