import React from "react";
import Footer from "../../../component/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import FamusFacilities from "../Facilities/FamusFacilities";
import News from "../News/News";
import { Rooms } from "../Rooms/Rooms";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <About />
      <Rooms />
      <Facilities />
      <FamusFacilities />
      <Testimonial />
      <News />
    </div>
  );
};

export default Home;
