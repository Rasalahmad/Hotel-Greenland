import React from "react";
import { FaMailBulk, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import styled from "styled-components";
import "../Restaurant/Restaurant.css";
import img1 from "../../../../assets/Restaurant/instagram-img1.jpg";
import img2 from "../../../../assets/Restaurant/instagram-img2.jpg";
import img3 from "../../../../assets/Restaurant/instagram-img3.jpg";
import img4 from "../../../../assets/Restaurant/instagram-img4.jpg";
import img5 from "../../../../assets/Restaurant/instagram-img5.jpg";
import img6 from "../../../../assets/Restaurant/instagram-img6.jpg";
const Info = () => {
  return (
    <div>
      <div className="text-center">
        {" "}
        <Title>Short Info</Title>
        <Header1>GET IN TOUCH</Header1>
      </div>
      <div className=" py-10 mx-auto px-10  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-semibold text-3xl mb-7">
              Let's Get Together
            </h3>
            <ul className="space-y-1">
              <li className="flex text-xl">
                <FaRegClock className="mt-1 mr-2"></FaRegClock> 24/7
              </li>
              <li className="flex text-xl py-3">
                <FaPhoneAlt className="mt-1 mr-2"></FaPhoneAlt> +8801810-058005
              </li>
              <li className="flex text-xl">
                <FaMailBulk className="mt-1 mr-2"></FaMailBulk>{" "}
                hotelgreenlandrestaurant@gmail.com
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-semibold text-3xl ">
              Opening Hour
            </h3>
            <ul className="">
              <li className="flex justify-between">
                <span className="day"> Monday</span>
                <span className="time"> 09 am - 10 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="day"> Tuesday</span>
                <span className="time"> 09 am - 10 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="day"> Wednesday</span>
                <span className="time"> 09 am - 10 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="day"> Thursday</span>
                <span className="time"> 09 am - 10 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="day"> Friday</span>
                <span className="time"> 11 am - 08 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="day"> Saturday</span>
                <span className="time"> 10 am - 11 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="day"> Sunday</span>
                <span className="time"> Closed </span>
              </li>
            </ul>
          </div>
          <div className="space-y-3 lg:space-x-6">
            <div className="uppercase font-semibold text-3xl lg:ml-6 mb-9">
              Instagram
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2">
              <img src={img1} alt="food" />
              <img src={img2} alt="food" />
              <img src={img3} alt="food" />
              <img src={img4} alt="food" />
              <img src={img5} alt="food" />
              <img src={img6} alt="food" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin-top: 60px;
`;

const Header1 = styled.div`
  background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
    no-repeat center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  font-size: 50px;
  @media (max-width: 640px) {
    background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
      no-repeat center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom: 50px;
  }
`;
