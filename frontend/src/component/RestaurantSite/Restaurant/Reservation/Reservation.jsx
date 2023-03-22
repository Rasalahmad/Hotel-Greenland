import React from "react";
import styled from "styled-components";
import "../Restaurant/Restaurant.css";

const Reservation = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const banner = "http://wahabali.com/work/pearl-demo/images/book-table.jpg";
  return (
    <div
      className="  bg-fixed md:bg-auto bg-cover bg-center py-20 "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-center lg:ml-24 lg:grid grid-cols-2">
        <div>
          <Title>Book a Table</Title>
          <Header1>RESERVATION</Header1>
          <form onSubmit={handlerSubmit}>
            <div className="lg:grid grid-cols-2 gap-2 mx-3">
              <div className=" col-span-2 mb-2 lg:mb-1">
                <div className="field">
                  <input
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 "
                    type="text"
                    placeholder="Type Your Name"
                    name="user_name"
                    required
                  />
                </div>
              </div>

              <div className="lg:my-2">
                <div>
                  <input
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 "
                    type="date"
                    placeholder="Appointment Date"
                    name="user_appointmentDate"
                    required
                  />
                </div>
              </div>

              <div className="my-2">
                <div className="field basic-example2">
                  <select
                    className="block  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 p-5"
                    name="reserv_persons"
                    id="reserv_persons"
                  >
                    <option value="">Choose A Time</option>
                    <option value="9:00am to 12:00pm">9:00am to 12:00pm</option>
                    <option value="12:00pm to 3:00pm">12:00pm to 3:00pm</option>
                    <option value="3:00pm to 6:00pm">3:00pm to 6:00pm</option>
                    <option value="6:00pm to 9:00pm">6:00pm to 9:00pm</option>
                    <option value="9:00pm to 12:00am">9:00pm to 12:00am</option>
                  </select>
                </div>
              </div>
              <div className="lg:my-2">
                <div className="field">
                  <select
                    className="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    name="reserv_persons"
                    id="reserv_persons"
                  >
                    <option value="">Persons</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>
              </div>
              <div className="my-2">
                <div className="field">
                  <input
                    className="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    type="email"
                    placeholder="Type Your Email"
                    name="user_email"
                    required
                  />
                </div>
              </div>
              <div className="col-span-2 lg:mt-1">
                <div>
                  <input
                    className="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    name="reserv_phone"
                    type="number"
                    placeholder="Phone No"
                    required
                  />
                </div>
              </div>
            </div>

            <div className=" mt-10">
              <button
                type="submit"
                className="btn btn-outline btn-wide hover:text-white"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

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
