import React from "react";
import About from "../About/About";
import Facilities from "../Facilities/Facilities";
import FamusFacilities from "../Facilities/FamusFacilities";
import News from "../News/News";
import { Rooms } from "../Rooms/Rooms";
import Testimonial from "../Testimonial/Testimonial";
import Slider from "../../Slider/Slider";

const Home = () => {
  return (
    <div>
      <About />
      <div style={{ width: "90%", margin: "100px auto 0" }}>
        <Slider />
      </div>
      <Rooms />
      <Facilities />
      <FamusFacilities />
      <Testimonial />
      <News />
    </div>
  );
};

export default Home;
