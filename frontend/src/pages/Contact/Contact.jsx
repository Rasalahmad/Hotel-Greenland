import React from "react";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-12 my-12 lg:mx-10 shadow-lg">
        <div className=" col-span-6 card-bordered rounded">
          <img
            src="https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-14039.jpg?w=2000"
            alt=""
            srcset=""
          />
        </div>
        <div className=" flex items-center justify-center col-span-6">
          <div className="w-full bg-white shadow  rounded p-5 ">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Let’s chat and get a quote!
            </p>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Name
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input  name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Company name
                </label>
                <input
                  tabIndex={0}
                  role="input"
                  arial-label="Please input company name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                  placeholder="Please input company name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Country
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input country name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input country name"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 mt-4">
              By clicking submit you agree to our terms of service, privacy
              policy and how we use data as stated
            </p>
            <div className="flex items-center justify-center w-full">
              <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-10  card-bordered">
        <iframe
          className="w-full h-96 rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847.171139092693!2d92.21923687243037!3d22.18909496969414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad6b38cb492611%3A0xf2bbfa416823b43b!2sHotel%20Green%20land%20Bandarban!5e0!3m2!1sen!2sbd!4v1680503113790!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
