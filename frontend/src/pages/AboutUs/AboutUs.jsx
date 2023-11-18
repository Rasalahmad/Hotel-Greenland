import React from "react";
import About from "../Home/About/About";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <div>
      <Title>
        About Our Oasis: <br /> Unveiling the Essence of Greenland{" "}
      </Title>
      <About />
      <Short>
        Nestled amidst the lush hills of the Chittagong Hill Tracts in
        Bangladesh, Hotel Greenland stands as a tranquil haven in the heart of
        Bandarban. Surrounded by the breathtaking beauty of nature, this
        enchanting retreat offers a perfect blend of modern comfort and
        traditional charm.
      </Short>
      <Short>
        The hotel's accommodation options cater to diverse preferences, from
        cozy rooms with panoramic views of the surrounding hills to spacious
        suites that exude luxury. Each room is thoughtfully designed to provide
        a comfortable retreat after a day of exploring the nearby attractions.
      </Short>
      <Short>
        Hotel Greenland takes pride in its commitment to sustainability and
        environmental conservation. The property is adorned with eco-friendly
        initiatives, from energy-efficient lighting to waste reduction programs,
        ensuring a minimal ecological footprint.
      </Short>
      <Short>
        Whether you are a nature enthusiast, cultural explorer, or simply
        seeking a peaceful retreat, Hotel Greenland in the Chittagong Hill
        Tracts promises an unforgettable stay, where the spirit of the hills
        embraces you in every moment.
      </Short>
    </div>
  );
};

export default AboutUs;
const Title = styled.div`
  text-align: center;
  font-size: 60px;
  margin-top: 60px;
  margin-bottom: -40px;
  font-family: "Great Vibes";
  padding-bottom: 35px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
const Short = styled.p`
  text-align: justify;
  font-size: 20px;
  margin-top: 30px;
  padding: 0 100px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
