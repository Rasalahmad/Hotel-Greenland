import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RoomCard = () => {
  return (
    <>
      <div className="lg:grid grid-cols-3 gap-2 lg:gap-3 px-0 lg:px-28">
        {/*Single Room Card  */}
        <div className="shadow-xl shadow-indigo-200 lg:my-20 bg-white rounded-lg">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold pt-10 pb-6">Single Room</h3>
            {/* <p className="mb-4">
              <span className="bg-black text-white p-2">
                <span className="text-xl font-bold">
                  From <span className="text-3xl">৳ 1200</span>
                </span>
                / night
              </span>
            </p> */}
            <Ul>
              <ListItem>Single Bed</ListItem>
              <ListItem>Bathroom</ListItem>
              <ListItem>TV</ListItem>
              <ListItem>Room Service</ListItem>
              <ListItem>Desk</ListItem>
            </Ul>
            <Ul unavailable>
              <UnavailableLi>Cots Available</UnavailableLi>
              <UnavailableLi>Laundry Facilities</UnavailableLi>
              <UnavailableLi>Linen and Towels Provided</UnavailableLi>
            </Ul>
            <Link to="/singleRooms">
              <button className="text-center rounded-tr-md rounded-bl-md text-xl hover:bg-slate-800 mt-10 cursor-pointer font-bold bg-black py-2 px-4 text-white">
                See Details
              </button>
            </Link>
          </div>
        </div>
        {/* Double Room Card */}
        <div className="shadow-xl shadow-indigo-200 my-10 bg-slate-300 rounded-lg">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold pt-10 pb-6">
              Family Special Room
            </h3>
            {/* <p className="mb-4">
              <span className="bg-black text-white p-2">
                <span className="text-xl font-bold">
                  From <span className="text-3xl">৳ 1800</span>
                </span>
                / night
              </span>
            </p> */}
            <Ul>
              <ListItem>Double Bed</ListItem>
              <ListItem>Bathroom</ListItem>
              <ListItem>TV</ListItem>
              <ListItem>Coffee Kit</ListItem>
              <ListItem>Bathrobes and slippers</ListItem>
              <ListItem>Room Service</ListItem>
              <ListItem>Desk</ListItem>
              <ListItem>Balcony</ListItem>
              <ListItem>Hairdryer</ListItem>
              <ListItem>Complimentary toiletries</ListItem>
              <ListItem>Laundry Facilities</ListItem>
              <ListItem>Linen and Towels Provided</ListItem>
            </Ul>
            <Link to="/familySpecialRoom">
              <button className="text-center rounded-tr-md rounded-bl-md text-xl hover:bg-slate-800 mt-10 cursor-pointer font-bold bg-black py-2 px-4 text-white">
                See Details
              </button>
            </Link>
          </div>
        </div>
        {/*Family Special Room Card  */}
        <div className="shadow-xl shadow-indigo-200 lg:my-20  bg-white rounded-lg">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold pt-10 pb-6">Double Room</h3>
            {/* <p className="mb-4">
              <span className="bg-black text-white p-2">
                <span className="text-xl font-bold">
                  From <span className="text-3xl">৳ 1600</span>
                </span>
                / night
              </span>
            </p> */}
            <Ul>
              <ListItem>Double Bed</ListItem>
              <ListItem>Bathroom</ListItem>
              <ListItem>TV</ListItem>
              <ListItem>Room Service</ListItem>
              <ListItem>Desk</ListItem>
              <ListItem>Balcony</ListItem>
              <ListItem>Hairdryer</ListItem>
              <ListItem>Complimentary toiletries</ListItem>
            </Ul>
            <Ul unavailable>
              <UnavailableLi>Laundry Facilities</UnavailableLi>
              <UnavailableLi>Linen and Towels Provided</UnavailableLi>
            </Ul>
            <Link to="/doubleRooms">
              <button className="text-center rounded-tr-md rounded-bl-md text-xl hover:bg-slate-800 mt-10 cursor-pointer font-bold bg-black py-2 px-4 text-white">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default RoomCard;

const Ul = styled.ul`
  list-style-type: none;
  padding: ${({ unavailable }) => (unavailable ? "0 20px" : "10px 20px 0")};
`;

const ListItem = styled.li`
  margin-left: 2px;
  background: url(https://static.pbcdn.in/car-cdn/rct/images/tick-mark.png)
    no-repeat 0 5px;
  padding-left: 18px;
  font-size: 12px;
  line-height: normal;
  color: #253858;
  min-height: 26px;
`;
const UnavailableLi = styled.li`
  margin-left: 2px;
  background: url(https://static.pbcdn.in/car-cdn/rct/images/cross-icon.png)
    no-repeat 0 5px;
  padding-left: 18px;
  font-size: 12px;
  line-height: normal;
  color: #253858;
  min-height: 26px;
`;
