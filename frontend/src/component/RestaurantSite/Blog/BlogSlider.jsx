import React from "react";
import { FaClock, FaComment } from "react-icons/fa";

// Import Swiper React components
import styled from "styled-components";
const BlogSlider = ({ data }) => {
  return (
    <div className="lg:flex justify-around gap-8 px-4">
      {data.map((item) => (
        <div key={item?.id}>
          <div className="">
            <img className=" rounded-lg" src={item?.image} alt="" />

            <img
              className="rounded-full h-12 ml-3 mt-[-30px]  card-bordered"
              src={item?.userimage}
              alt=""
            />

            <p className="text-xl font-semibold my-4">{item?.title}</p>
            <p>{item?.blog.slice(0, 70)}.....</p>
            <div className="mt-4">
              <ul className="flex justify-between">
                <li className="flex gap-2">
                  <FaClock className="text-xl "></FaClock>
                  <span className="mt-[-2px]">{item?.date}</span>
                </li>
                <li className="flex gap-3">
                  <FaComment className="text-xl"></FaComment>
                  <span className="mt-[-2px]">{item?.comment} comment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSlider;
