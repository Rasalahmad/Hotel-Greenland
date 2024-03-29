import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/glLogo.png";
import User from "../assets/icons/user.png";
import logOUT from "../assets/icons/logout.png";

import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().carch();
  };
  return (
    <div className="navbar bg-transparent absolute text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <Link to="/" className="active:bg-transparent">
                HOME
              </Link>
            </li>
            <li style={{ zIndex: "1000" }}>
              <p className=" uppercase">
                Rooms
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </p>
              <ul className="p-2 bg-gray-500">
                <li>
                  <Link to="/singleRooms" className="active:bg-transparent">
                    Couple Rooms
                  </Link>
                </li>
                <li>
                  <Link to="/doubleRooms" className="active:bg-transparent">
                    Double Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/familySpecialRoom"
                    className="active:bg-transparent"
                  >
                    Special Rooms
                  </Link>
                </li>
                <li>
                  <Link to="/allRoom" className="active:bg-transparent">
                    All Room
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/restaurant" className="active:bg-transparent">
                RESTURANT
              </Link>
            </li>
            <li>
              <Link to="/blog" className="active:bg-transparent">
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/contact" className="active:bg-transparent">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl p-2 cursor-pointer">
          <Image src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="active:bg-transparent">
              HOME
            </Link>
          </li>
          <li style={{ zIndex: "1000" }}>
            <a>
              ROOMS
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-gray-500">
              <li>
                <Link to="/singleRooms" className="active:bg-transparent">
                  Couple Rooms
                </Link>
              </li>
              <li>
                <Link to="/doubleRooms" className="active:bg-transparent">
                  Double Rooms
                </Link>
              </li>
              <li>
                <Link to="/familySpecialRoom" className="active:bg-transparent">
                  Special Rooms
                </Link>
              </li>
              <li>
                <Link to="/allRoom" className="active:bg-transparent">
                  All Room
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/restaurant" className="active:bg-transparent">
              RESTURANT
            </Link>
          </li>
          <li>
            <Link to="/blog" className="active:bg-transparent">
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/contact" className="active:bg-transparent">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        {user?.email ? (
          <div className="dropdown dropdown-hover dropdown-end relative right-3">
            <label tabIndex={0} className="">
              <img
                src={user?.photoURL ? user?.photoURL : User}
                style={{ width: "40px" }}
                alt=""
                referrerpolicy="no-referrer"
                className=" rounded-full"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-500 rounded-box w-56"
            >
              <div className="text-center texr-xl font-semibold mb-4 border-b-[1px] pb-2">
                <p>{user?.displayName}</p>
                <p>{user?.email}</p>
              </div>
              <li>
                <Link
                  to="booking"
                  className="btn btn-outline text-white w-auto mb-4"
                >
                  Booking List
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="bg-white text-gray-500 font-bold flex justify-center hover:border-[1px] hover:bg-transparent hover:text-white"
                >
                  LogOut
                  <img src={logOUT} alt="" className="w-5" />
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to="http://www.fbta.gov.bd/"
              className="btn btn-outline text-white w-auto mb-4"
            >
              Foreigners Registration
            </Link>
            <Link to="login" className="btn btn-outline text-white w-auto mb-4">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

const Image = styled.img`
  width: 200px;
  height: 60px;
  object-fit: cover;
`;
