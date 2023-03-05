import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const Checkout = ({ noImage, image, title, btnText, route }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [room, setRoom] = useState(1);
  const [guests, setGuests] = useState(1);

  return (
    <Container>
      <div>{!noImage && <Image src={image} />}</div>
      <div>
        <Heading>{title}</Heading>
        <div className="flex text-white gap-4 p-4">
          <div className="flex flex-col gap-1 w-1/2 cursor-pointer bg-black py-5 text-center">
            <label className="-mb-2 text-gray-400 font-bold ">CHECK-IN</label>
            <DatePicker
              className="input w-full flex focus:outline-none z-10 bg-transparent text-white text-center"
              placeholderText={"Check-in"}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              dateFormat="EEE, dd/MM/yy"
              // formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2 cursor-pointer bg-black py-5 text-center">
            <label className="-mb-2 text-gray-400 font-bold ">CHECK-OUT</label>
            <DatePicker
              className="input w-full flex focus:outline-none z-10 bg-transparent text-white text-center"
              placeholderText={"Check-in"}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              dateFormat="EEE, dd/MM/yy"
              // formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
            />
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="w-1/2 h-28 cursor-pointer bg-black my-8 py-5 text-center text-white">
            GUESTS
            <div className="flex justify-center gap-8">
              {guests > 1 ? (
                <p onClick={() => setGuests(guests - 1)} className="text-4xl">
                  -
                </p>
              ) : (
                <p></p>
              )}
              <p className="text-4xl">{guests}</p>
              <p onClick={() => setGuests(guests + 1)} className="text-4xl">
                +
              </p>
            </div>
          </div>
          <div className="w-1/2 h-28 cursor-pointer bg-black my-8 py-5 text-center text-white">
            NIGHTS
            <div className="flex justify-center gap-8">
              {room > 1 ? (
                <p onClick={() => setRoom(room - 1)} className="text-4xl">
                  -
                </p>
              ) : (
                <p></p>
              )}
              <p className="text-4xl">{room}</p>
              <p onClick={() => setRoom(room + 1)} className="text-4xl">
                +
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-white font-bold text-center bg-black p-8 cursor-pointer">
          <Link to={route}>{btnText}</Link>
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
