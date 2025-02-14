import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { BiBed, BiLaptop, BiDrink } from "react-icons/bi";
import { MdBathroom } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetRoomsQuery } from "../../../../features/rooms/roomApi";
import Loader from "../../../../component/Loader/Loader";

const SingleRoom = () => {
  const {
    data: roomData,
    isLoading,
    isError,
    error,
  } = useGetRoomsQuery({ roomType: "single_room" });

  const service = [
    {
      id: 1,
      icon: <BiDrink size={24} />,
      title: "Welcome Drinks",
    },
    {
      id: 1,
      icon: <MdBathroom size={24} />,
      title: "Private Bathroom",
    },
    {
      id: 1,
      icon: <FaSwimmingPool size={24} />,
      title: "Swiming Pool",
    },
    {
      id: 1,
      icon: <BiLaptop size={24} />,
      title: "Television",
    },
  ];

  let content = null;

  if (isLoading) {
    content = <Loader type={"List"} />;
  } else if (!isLoading && isError) {
    content = <p>{error}</p>;
  } else if (!isLoading && !isError && roomData?.data?.length === 0) {
    content = <p>No Room Available</p>;
  } else {
    content = (
      <Container>
        <Main>
          <Right>
            {roomData?.data?.map((item) => (
              <Card key={item._id}>
                <Image
                  src={`${process.env.REACT_APP_IMAGE_URL}/images/${item?.thumbnail}`}
                  alt=""
                />
                <Content>
                  <Title>{item?.name}</Title>
                  <FContainer>
                    <Facilities>
                      <BsPersonCircle size={25} />
                      <p>{item?.guests} persons</p>
                      <BiBed size={25} />
                      <p>{item?.price} / per night</p>
                    </Facilities>
                  </FContainer>
                  <Description>{item.desc.slice(0, 100)}</Description>
                  <Link to={`/booking/${item._id}`}>
                    <Button>BOOK NOW</Button>
                  </Link>
                  <hr />
                  <FullInfo>
                    {service.map((s) => (
                      <Icons title={s.title}>{s.icon}</Icons>
                    ))}
                    <Link to={`/room/${item._id}`}>
                      <Button info>Full Info</Button>
                    </Link>
                  </FullInfo>
                </Content>
              </Card>
            ))}
          </Right>
        </Main>
      </Container>
    );
  }

  return content;
};

export default SingleRoom;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const Main = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;

const Card = styled.div`
  width: 400px;
  box-shadow: 0px 9px 30px rgba(255, 149, 5, 0.3);
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: auto;
  }
`;
const Content = styled.div`
  padding: 0 20px;
`;
const Title = styled.h3`
  font-size: 26px;
  font-weight: bold;
  margin-top: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 250px;
`;
const FContainer = styled.div`
  display: flex;
  gap: 40px;
  margin: 15px 0 35px 0;
`;
const Facilities = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Description = styled.div`
  color: #919191;
`;
const Button = styled.button`
  background: ${({ info }) => (info ? "#eeeeee" : "lightblue")};
  width: ${({ info }) => (info ? "100px" : "auto")};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  margin: 15px 0;
`;

const Icons = styled.div``;
const FullInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
