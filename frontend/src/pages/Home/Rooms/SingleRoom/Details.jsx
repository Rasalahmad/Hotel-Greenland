import React from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "react-datepicker/dist/react-datepicker.css";
import { BsPersonCircle } from "react-icons/bs";
import { RxSpaceEvenlyVertically } from "react-icons/rx";
import { BiBed, BiLaptop, BiDrink } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdBathroom } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import Checkout from "../../../../component/Checkout/Checkout";
import { useParams } from "react-router-dom";
import { useGetRoomQuery } from "../../../../features/rooms/roomApi";
import Loader from "../../../../component/Loader/Loader";

const Details = () => {
  const { roomId } = useParams();
  const { data: room, isLoading, isError, error } = useGetRoomQuery(roomId);
  const { name, images, guests, price, weekPrice, desc, around } =
    room?.data || {};

  const Images = images?.map((item) => {
    return {
      original: `${process.env.REACT_APP_IMAGE_URL}/images/${item?.original}`,
      thumbnail: `${process.env.REACT_APP_IMAGE_URL}/images/${item?.thumbnail}`,
      _id: item?._id,
    };
  });

  let content = null;

  if (isLoading) {
    content = <Loader type={"Details"} />;
  } else if (!isLoading && isError) {
    content = <p>{error}</p>;
  } else {
    content = (
      <Container>
        <h2 className="text-4xl font-bold">{name}</h2>
        <p className="my-5 text-gray-400">HOTEL GREENLAND</p>
        <Main>
          <div className="md:w-3/4">
            <ImageGallery items={Images} />
          </div>
          <Checkout
            noImage
            btnText={"Book Now"}
            route={`/booking/${roomId}`}
            price={price}
            guests={guests}
          />
        </Main>
        <Facilities className="flex justify-between items-center flex-wrap gap-16 my-28">
          <Item>
            <BsPersonCircle size={50} />
            <p>{guests} Guests</p>
          </Item>
          <Item>
            <RxSpaceEvenlyVertically size={50} />
            <p>15 Ft</p>
          </Item>
          <Item>
            <BiBed size={50} />
            <p>{price} / Per Night</p>
          </Item>
          <Item>
            <SlCalender size={50} />
            <p>{weekPrice} / Week Price</p>
          </Item>
        </Facilities>
        <div>
          <p>{desc}</p>
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
                <BiDrink size={30} />
                <p>Welcome Drinks</p>
              </Item>
            </Facilities>
          </Service>
          <div>
            <h2 className="text-4xl font-bold">Similar Rooms</h2>
          </div>
        </div>
      </Container>
    );
  }

  return content;
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
  height: 400px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 390px;
  }
`;
