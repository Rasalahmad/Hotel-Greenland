import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { BiBed, BiLaptop, BiDrink } from "react-icons/bi";
import { MdBathroom } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { Link } from "react-router-dom";
import RoomCardSkeleton from "./RoomSkeleton";

const RoomList = ({ rooms, isLoading, isError, error }) => {
  const serviceIcons = [
    { id: 1, icon: <BiDrink />, title: "Welcome Drinks" },
    { id: 2, icon: <MdBathroom />, title: "Private Bathroom" },
    { id: 3, icon: <FaSwimmingPool />, title: "Swimming Pool" },
    { id: 4, icon: <BiLaptop />, title: "Television" },
  ];

  if (isLoading)
    return (
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {[...Array(6)].map((_, index) => (
          <RoomCardSkeleton key={index} />
        ))}
      </div>
    );
  if (isError) return <ErrorMessage>{error}</ErrorMessage>;
  if (!rooms?.length) return <ErrorMessage>No Room Available</ErrorMessage>;

  return (
    <Container>
      <Main>
        <Right>
          {rooms.map((room) => (
            <Card key={room._id}>
              <Image
                src={`${process.env.REACT_APP_IMAGE_URL}/images/${room?.thumbnail}`}
                alt={room?.name}
              />
              <Content>
                <Title>{room?.name}</Title>
                <FContainer>
                  <Facilities>
                    <BsPersonCircle size={22} />
                    <p>{room?.guests} Guests</p>
                    <BiBed size={22} />
                    <p>
                      <span className="text-xl">৳</span> {room?.price} / Night
                    </p>
                  </Facilities>
                </FContainer>
                <Description>{room.desc.slice(0, 100)}...</Description>
                <ButtonGroup>
                  <Link to={`/booking/${room._id}`}>
                    <Button>BOOK NOW</Button>
                  </Link>
                  <Link to={`/room/${room._id}`}>
                    <Button info>Full Info</Button>
                  </Link>
                </ButtonGroup>
                <hr />
                <FullInfo>
                  {serviceIcons.map((s) => (
                    <Icons key={s.id} title={s.title}>
                      {s.icon}
                    </Icons>
                  ))}
                </FullInfo>
              </Content>
            </Card>
          ))}
        </Right>
      </Main>
    </Container>
  );
};

export default RoomList;

// Styled Components
const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 40px 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const Card = styled.div`
  width: 380px;
  background: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
`;

const FContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 15px 0 25px 0;
`;

const Facilities = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #666;
  font-size: 14px;
`;

const Description = styled.p`
  color: #777;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Button = styled.button`
  background: ${({ info }) => (info ? "#f3f4f6" : "#4ade80")};
  color: ${({ info }) => (info ? "#333" : "#fff")};
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  &:hover {
    background: ${({ info }) => (info ? "#e5e7eb" : "#22c55e")};
  }
`;

const FullInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const Icons = styled.div`
  font-size: 20px;
  color: #666;
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-size: 16px;
`;
