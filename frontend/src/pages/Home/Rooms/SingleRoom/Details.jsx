import React, { useState } from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsPersonCircle } from "react-icons/bs";
import { RxSpaceEvenlyVertically } from "react-icons/rx";
import { BiBed, BiLaptop, BiDrink } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdBathroom } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import Checkout from "../../../../component/Checkout/Checkout";

const Details = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <Container>
      <h2 className="text-4xl font-bold">Double Room</h2>
      <p className="my-5 text-gray-400">HOTEL GREENLAND</p>
      <Main>
        <div className="md:w-3/4">
          <ImageGallery items={images} />
        </div>
        <Checkout noImage btnText={"Book Now"} route={"/booking"} />
      </Main>
      <Facilities className="flex justify-between items-center flex-wrap gap-16 my-28">
        <Item>
          <BsPersonCircle size={50} />
          <p>2 Guests</p>
        </Item>
        <Item>
          <RxSpaceEvenlyVertically size={50} />
          <p>15 Ft</p>
        </Item>
        <Item>
          <BiBed size={50} />
          <p>1500 / Per Night</p>
        </Item>
        <Item>
          <SlCalender size={50} />
          <p>Week Price</p>
        </Item>
      </Facilities>
      <div>
        <p>
          Cras malesuada mauris tortor, id tempus mauris blandit sit amet. Morbi
          a velit efficitur, porttitor metus et, interdum nunc. Phasellus ut
          elementum diam. Aliquam erat volutpat. Nunc et facilisis elit. Donec
          consectetur nibh vel gravida aliquet. Suspendisse sit amet lectus
          tristique, condimentum libero vel, porta justo. Proin sit amet porta
          nibh. Pellentesque leo lorem, blandit quis hendrerit a, suscipit
          dapibus nulla. Aenean ut facilisis felis. Cras tincidunt elementum
          neque, id viverra magna viverra et. Nam tincidunt urna sed urna
          vehicula fringilla. Curabitur bibendum dictum nunc, ut elementum nibh
          efficitur gravida. Phasellus luctus scelerisque libero, nec lobortis
          tortor volutpat at. Nam vitae turpis in est tristique placerat id sed
          tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus
          tempus fermentum.
        </p>
        <Service>
          <h3 className="my-10 text-3xl font-bold">Room Service</h3>
          <Facilities className="flex justify-between items-center gap-16 flex-wrap my-10">
            <Item service>
              <BiLaptop size={30} />
              <p>Television</p>
            </Item>
            <Item service>
              <MdBathroom size={30} />
              <p>Private Bathroom</p>
            </Item>
            <Item service>
              <FaSwimmingPool size={30} />
              <p>Swiming Pool</p>
            </Item>
            <Item service>
              <BiDrink size={30} />
              <p>Welcome Drinks</p>
            </Item>
          </Facilities>
        </Service>

        <Service>
          <h3 className="my-10 text-3xl font-bold">Around The Hotel</h3>
          <Facilities className="flex justify-between flex-wrap gap-7 my-10">
            <div>
              <Image
                src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/04/vert-4.jpg"
                alt=""
              />
              <div className="bg-green-300">
                <p className="-mt-10 ml-7 font-bold text-xl text-white">
                  Lounge Bar
                </p>
              </div>
            </div>
            <div>
              <Image
                src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert3.jpeg"
                alt=""
              />
              <p className="-mt-10 ml-7 font-bold text-xl text-white">
                Resturant
              </p>
            </div>
            <div>
              <Image
                src="http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert1.jpeg"
                alt=""
              />
              <p className="-mt-10 ml-7 font-bold text-xl text-white">
                Wellness
              </p>
            </div>
          </Facilities>
        </Service>
        <div>
          <h2 className="text-4xl font-bold">Similar Rooms</h2>
        </div>
      </div>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Facilities = styled.div``;
const Service = styled.div`
  margin: 100px 0;
`;
const Item = styled.div`
  display: flex;
  flex-direction: ${({ service }) => (service ? "row" : "column")};
  align-items: center;
  gap: 20px;
  width: 120px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 340px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
