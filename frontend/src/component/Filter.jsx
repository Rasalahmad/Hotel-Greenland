import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [room, setRoom] = useState("1 room");
  const [people, setPeople] = useState("1 person");
  const navigate = useNavigate();

  const handleSearch = () => {
    const formattedStartDate = moment(startDate).format("YYYY-MM-DD");
    const formattedEndDate = moment(endDate).format("YYYY-MM-DD");

    // Set query params for filtering rooms
    const newQueryParams = `?checkIn=${formattedStartDate}&checkOut=${formattedEndDate}&room=${room}&guests=${people}`;

    // Update the URL with the new query params
    navigate(`/search-results${newQueryParams}`);
  };

  return (
    <Container>
      <div className="lg:flex mx-auto py-10 pl-4 pr-6 lg:px-10 space-y-4 space-x-1 md:space-y-0 bg-transparent absolute text-white bottom-0 w-full">
        <DatePickerField
          label="Check In"
          selectedDate={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePickerField
          label="Check Out"
          selectedDate={endDate}
          onChange={(date) => setEndDate(date)}
        />
        <SelectField
          label="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          options={["1 room", "2 rooms", "3 rooms"]}
        />
        <SelectField
          label="Guests"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          options={["1 person", "2 persons", "4 persons"]}
        />
        <div className="flex flex-col gap-1 w-full bg-transparent lg:w-1/3 rounded-lg border border-white text-white cursor-pointer">
          <button
            className="btn bg-transparent w-full flex items-center justify-center h-full"
            onClick={handleSearch}
          >
            <AiOutlineSearch className="mr-2" size={24} />
            <div className="text-lg">Search</div>
          </button>
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

const DatePickerField = ({ label, selectedDate, onChange }) => (
  <div className="flex flex-col ml-1 gap-1 w-full lg:w-1/3 bg-white text-black border-l-4 border-green-200 rounded-lg cursor-pointer">
    <label className="ml-3.5 text-sm mt-2 -mb-2 text-gray-400 font-bold">
      {label}
    </label>
    <DatePicker
      className="bg-white input w-full max-w-xs text-black flex focus:outline-none"
      selected={selectedDate}
      onChange={onChange}
      minDate={new Date()}
      dateFormat="EEE, dd/MM/yy"
    />
  </div>
);

const SelectField = ({ label, value, onChange, options }) => (
  <div className="flex flex-col gap-1 w-full text-black bg-white lg:w-1/3 p-2 rounded-lg">
    <label className="ml-3.5 text-sm mt-2 -mb-2 text-gray-400 font-bold">
      {label}
    </label>
    <select
      className="select-bordered w-full text-black bg-white border-none focus:outline-none"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
