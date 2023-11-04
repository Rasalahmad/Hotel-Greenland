/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styled from "styled-components";
import ContactForm from "../../component/Form/ContactForm";
import contacrtImg from "../../assets/images/hotel-contact-form.avif";
const Contact = () => {
  return (
    <>
      <Title>Contact Us</Title>
      <div className="lg:grid grid-cols-12 my-12 lg:mx-10 card-bordered  rounded-xl  mx-2 ">
        <div className=" col-span-6 ">
          <img src={contacrtImg} alt="" srcSet="" />
        </div>
        <div className=" flex items-center justify-center col-span-6 lg:mr-[20px]">
          <div className="divider lg:flex hidden lg:divider-horizontal"></div>
          <div className="w-full bg-white p-5">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Send Us a Message
            </p>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
      <div className="lg:mx-10 mx-2 card-bordered">
        <iframe
          className="w-full h-96 rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847.171139092693!2d92.21923687243037!3d22.18909496969414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad6b38cb492611%3A0xf2bbfa416823b43b!2sHotel%20Green%20land%20Bandarban!5e0!3m2!1sen!2sbd!4v1680503113790!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin-top: 60px;
`;
