import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker, { setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BookingTime,
  decrement,
  increment,
} from "../../features/rooms/roomSlice";
import { differenceInDays, toDate } from "date-fns";
import moment from "moment";

const Checkout = ({
  noImage,
  image,
  title,
  btnText,
  route,
  price,
  guests,
  name,
}) => {
  const { numberOfDays } = useSelector((state) => state.room);
  const [startDate, setStartDate] = useState(
    numberOfDays?.startDate ? numberOfDays?.startDate : new Date()
  );
  const [endDate, setEndDate] = useState(
    numberOfDays?.endDate ? numberOfDays?.endDate : new Date()
  );
  const [isSelected, setIsSelected] = useState(true);

  const night =
    startDate && endDate && differenceInDays(endDate, startDate) + 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (startDate && endDate) {
      dispatch(BookingTime({ night, startDate, endDate }));
    }
  }, [dispatch, endDate, night, startDate]);

  return (
    <Container>
      <div>
        {!noImage && (
          <Image src={`${process.env.REACT_APP_IMAGE_URL}/images/${image}`} />
        )}
      </div>
      <div>
        {title || name ? (
          <Heading>
            {title} <br /> {name}{" "}
          </Heading>
        ) : (
          <noscript />
        )}
        <div className="flex text-white gap-4 p-4">
          <div className="flex flex-col gap-1 w-1/2 cursor-pointer bg-black py-5 text-center">
            <label className="-mb-2 text-gray-400 font-bold ">CHECK-IN</label>
            <DatePicker
              className="input w-full flex focus:outline-none z-10 bg-transparent text-white text-center"
              placeholderText={"Check-in"}
              selected={startDate}
              onChange={(date) => [setStartDate(date), setIsSelected(false)]}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              dateFormat="EEE, dd/MM/yy"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2 cursor-pointer bg-black py-5 text-center">
            <label className="-mb-2 text-gray-400 font-bold ">CHECK-OUT</label>
            <DatePicker
              className="input w-full flex focus:outline-none z-10 bg-transparent text-white text-center"
              placeholderText={"Check-in"}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              endDate={endDate < startDate ? startDate : endDate}
              minDate={startDate}
              dateFormat="EEE, dd/MM/yy"
              readOnly={isSelected}
            />
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="w-1/2 h-28 cursor-pointer bg-black my-8 py-5 text-center text-white">
            GUESTS
            <div className="flex justify-center gap-8">
              <p className="text-4xl">{guests}</p>
            </div>
          </div>
          <div className="w-1/2 h-28 cursor-pointer bg-black my-8 py-5 text-center text-white">
            NIGHTS
            <div className="flex justify-center gap-8">
              <p className="text-4xl">{night}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-white font-bold text-center bg-black p-8 cursor-pointer">
          <Link to={route}>
            {btnText} / <span className="text-3xl">৳</span>{" "}
            {price * 1 * (night * 1)}
          </Link>
        </h1>
      </div>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
  background-color: #444;
  height: max-content;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
`;

const Heading = styled.h2`
  text-align: center;
  margin: 50px 0;
  color: white;
`;
