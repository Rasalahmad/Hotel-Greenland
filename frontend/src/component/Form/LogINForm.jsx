import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import google from "../../assets/icons/google.png";
const LogINForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, user, googleLogin } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || "/";

  const [loginError, setLoginError] = useState("");

  const handleLogin = (data) => {
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success(" Successfully Login.");
        navigate(from, { replace: true });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const handlerGoogleSingIn = () => {
    googleLogin()
      .then((result) => {
        navigate(from, { replace: true });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col items-center mt-8 ">
            <div className="md:w-72 flex flex-col md:mt-0 mt-4 mb-5">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                {...register("email", {
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email required",
                })}
              />
            </div>
            <p className="text-red-300">{errors.email}</p>
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Password
              </label>
              <input
                type="password"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                {...register("password", {
                  required: true,
                })}
              />
            </div>
          </div>
          <p className="text-red-400 text-center mt-5">{loginError}</p>

          <div className="flex items-center justify-center w-full ">
            <button className="mt-9 uppercase text-base font-semibold leading-none rounded-full text-white py-4 px-10 bg-indigo-700  hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
              Log In
            </button>
          </div>
          <div
            className="flex items-center justify-center w-full "
            onClick={handlerGoogleSingIn}
          >
            <button className="flex gap-5 mt-9 uppercase text-base font-semibold leading-none text-black border-[1px] hover:border-gray-400 rounded-full py-4 px-10 ">
              Google <img src={google} alt="" className="w-5" />
            </button>
          </div>

          <p className="text-center text-md leading-3 text-gray-600 mt-4">
            No Account?
            <Link className="hover:text-gray-400" to="/register">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogINForm;
