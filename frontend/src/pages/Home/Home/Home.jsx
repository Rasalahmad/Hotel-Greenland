import React from "react";
import About from "../About/About";
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
