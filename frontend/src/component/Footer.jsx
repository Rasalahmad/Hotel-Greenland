import React from "react";
import styled from "styled-components";
import facebook from "../assets/icons/facebook.png";
import instra from "../assets/icons/instra.png";
import twittor from "../assets/icons/twittor.png";
import linkedIn from "../assets/icons/in.png";
import award from "../assets/images/award.png";
import payment from "../assets/images/payment.png";
import { BsPhone, BsTelephoneForward } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <Container className="bg-black text-white mt-9">
      <div className="grid grid-cols-1 lg:grid-cols-4 grid-flow-row gap-4">
        <Section className="md:basis-1/3">
          <h3 className="text-3xl font-bold pb-10">GREENLAND</h3>
          <div className="flex flex-row gap-5">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/hotelgreenlandbandarban"
            >
              <img src={facebook} alt="" />
            </a>
            <a target={"_blank"} rel="noreferrer" href="www.instagram.com">
              <img src={instra} alt="" />
            </a>
            <a target={"_blank"} rel="noreferrer" href="www.twittor.com">
              <img src={twittor} alt="" />
            </a>
            <a target={"_blank"} rel="noreferrer" href="www.linkedin.com">
              <img src={linkedIn} alt="" />
            </a>
          </div>
        </Section>
        <Section className="mt-9 lg:mt-0">
          <h1 className="text-lg">CONTACT</h1>
          <div className="mt-12">
            <p className="flex gap-3 items-center">
              <BsPhone size={25} />
              <span className="text-gray-400">+8801810-058005</span>
            </p>
          </div>
          <div className="mt-6">
            <p className="flex gap-3 items-center">
              <FiMail size={25} />
              <span className="text-gray-400">
                hotelgreenlandbban@gmail.com
              </span>
            </p>
          </div>
          <div className="mt-6">
            <p className="flex gap-3 items-center">
              <BsTelephoneForward size={25} />
              <span className="text-gray-400">123456789</span>
            </p>
          </div>
        </Section>
        <Section className="mt-9 lg:mt-0">
          <h1 className="text-lg">HOTEL ADDRESS</h1>
          <p className="mt-12">
            <span className="text-gray-400">Greenland Av.</span>
          </p>
          <p className="mt-6">
            <span className="text-gray-400">56Q9+MC9, Bandarban</span>
          </p>
          <p className="mt-6">
            <span className="text-gray-400">Bandarban Sadar, Bandarban</span>
          </p>
        </Section>
        <Section className="mt-9 lg:mt-0">
          <img src={award} alt="" />
          <img src={payment} alt="" className="mt-7 w-60" />
        </Section>
      </div>
      <div>
        <p className="text-center mt-20 text-gray-400">
          Copyright © GoodLayers. All Rights Reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 80px 100px 20px 100px;
  margin: 100px 0px 20px 0px;
  border-radius: 20px;
  @media (max-width: 768px) {
    margin-bottom: 0px;
    padding: 50px 40px;
  }
`;
const Section = styled.div``;
