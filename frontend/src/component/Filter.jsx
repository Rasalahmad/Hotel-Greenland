import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { handleSearch, setHotel } from "../../features/searchSlice";

const Filter = ({ setSearch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [room, setRoom] = useState("1 room");
  const [people, setPeople] = useState("1 person");

  return (
    <Container>
      <div className="lg:flex mx-auto py-10 pl-4 pr-6 lg:px-10 space-y-4 space-x-1 md:space-y-0 bg-transparent absolute text-white bottom-0 w-full">
        {/* <div className="flex flex-col gap-1 w-full lg:w-1/3">
          <div className="">Search Hotel Name</div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search hotel name"
            className="input-bordered input w-full bg-white lg:w-auto text-black"
          />
        </div> */}
        <div className="flex flex-col ml-1 gap-1 w-full lg:w-1/3 bg-white text-black border-l-4 border-green-200 focus:border-green-200 focus:ring-green-400 border-l-green-500 rounded-lg	cursor-pointer">
          <label className="ml-3.5 text-sm mt-2 -mb-2 text-gray-400 font-bold">
            Check In
          </label>
          <DatePicker
            className="bg-white input w-full lg:w-auto max-w-xs text-black flex focus:outline-none z-10"
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
        <div className="flex flex-col gap-1 w-full lg:w-1/3 bg-white text-black border-l-4 border-red-200 focus:border-red-200 focus:ring-red-400 border-l-red-500 rounded-lg	cursor-pointer">
          <label className="ml-3.5 text-sm mt-2 -mb-2 text-gray-400 font-bold">
            Check Out
          </label>
          <DatePicker
            className="bg-white input w-full lg:w-auto max-w-xs text-black flex focus:outline-none"
            placeholderText={"Checkout"}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="EEE, dd/MM/yy"
            // formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
          />
        </div>

        <div className="flex flex-col gap-1 w-full text-black bg-white lg:w-1/3 p-2 rounded-lg">
          <label className="ml-3.5 text-sm mt-2 -mb-2 text-gray-400 font-bold">
            Room
          </label>
          <select
            className="select-bordered w-full select text-black bg-white lg:w-auto border-none focus:outline-none"
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="1 room">1 room</option>
            <option value="2 room"> 2 room</option>
            <option value="3 room"> 3 room</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 w-full text-black bg-white lg:w-1/3 p-2 rounded-lg">
          <label className="ml-3.5 text-sm mt-2 -mb-2 text-gray-400 font-bold">
            Guests
          </label>
          <select
            className="select-bordered w-full select text-black bg-white lg:w-auto border-none focus:outline-none ease-in-out transition px-3"
            onChange={(e) => setPeople(e.target.value)}
          >
            <option value="1 person">1 Person</option>
            <option value="2 person">2 Person</option>
            <option value="4 person">4 Person</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 w-full bg-transparent lg:w-1/3 rounded-lg border border-white text-white cursor-pointer">
          <Link
            to={"allRoom"}
            className="btn bg-transparent w-full flex items-center justify-center h-full"
          >
            <AiOutlineSearch className="mr-2" size={24} />
            <div className="bg-transparent gap-2 outline-none text-lg">
              Search
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
