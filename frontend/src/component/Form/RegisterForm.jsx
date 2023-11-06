import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, user } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || "/";

  const [singUpError, setSignUpError] = useState("");

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");

        navigate(from, { replace: true });
        navigate("/");
        const userInfo = {
          displayName: data.name,
          phoneNumber: data.telephone,
        };
        updateUser(userInfo);
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });

    // const saveUser = (name, email) => {
    //   const role = "seller";
    //   const user = { name, email, role };
    //   fetch("https://tech-com-server.vercel.app/users", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setCreateUserEmail(email);
    //     });
    // };
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="md:flex items-center mt-12">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">
              Name
            </label>
            <input
              type="text"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-8 lg:mt-auto">
            <label className="text-base font-semibold leading-none text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              {...register("email", {
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
          </div>
        </div>
        <div className="md:flex items-center mt-8 gap-6">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">
              Phone No
            </label>
            <input
              type="number"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
              {...register("telephone", {
                required: true,
                pattern: /^01[3-9]\d{8}$/,
              })}
            />
          </div>
          <div className="md:w-72 flex flex-col mt-8 lg:mt-auto">
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
        <p className="text-red-500 mt-3">{singUpError}</p>
        <p className="text-xs leading-3 text-gray-600 mt-4">
          By creating an account, I consent to the processing of my personal
          data in accordance with the privacy policy
        </p>
        <div className="flex items-center justify-center w-full">
          <button className="mt-9 uppercase text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded-full hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
            Register
          </button>
        </div>
        <p className="text-center text-md leading-3 text-gray-600 mt-4">
          Already Have an account?{" "}
          <Link className="hover:text-gray-400" to="/login">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
