import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/glLogo.png";

const Navbar = () => {
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
            <li>
              <Link to="/allRoom" className="active:bg-transparent">
                ROOMS
              </Link>
            </li>
            <li>
              <a className="active:bg-transparent">RESERBATION</a>
            </li>
            <li>
              <a className="active:bg-transparent">BLOG</a>
            </li>
            <li>
              <a className="active:bg-transparent">CONTACT</a>
            </li>
            <li>
              <Link to="allRoom" className="active:bg-transparent">
                BOOK NOW
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
          <li>
            <Link to="/allRoom" className="active:bg-transparent">
              ROOMS
            </Link>
          </li>
          <li>
            <a className="active:bg-transparent">RESERBATION</a>
          </li>
          <li>
            <a className="active:bg-transparent">BLOG</a>
          </li>
          <li>
            <a className="active:bg-transparent">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end invisible lg:visible">
        <Link to="allRoom" className="btn btn-outline btn-wide text-white">
          Book Now
        </Link>
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
