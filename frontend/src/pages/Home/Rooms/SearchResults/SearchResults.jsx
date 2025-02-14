import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../../../component/Loader/Loader";
import { useGetRoomsQuery } from "../../../../features/rooms/roomApi";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get("checkIn");
  const checkOut = queryParams.get("checkOut");
  const room = queryParams.get("room");
  const guests = queryParams.get("guests");

  const newParams = { checkIn, checkOut, room, guests }; // This is an object
  const { data: rooms, isFetching, error } = useGetRoomsQuery(newParams);

  useEffect(() => {
    if (rooms?.data?.length > 0) {
      setSearchResults(rooms.data);
    }
  }, [rooms]);

  let content = null;

  if (isFetching) {
    content = <Loader type={"List"} />;
  } else if (error) {
    content = <p>Error fetching rooms</p>;
  } else if (searchResults.length === 0) {
    content = <p>No Rooms Available</p>;
  } else {
    content = (
      <Container>
        <Main>
          <Right>
            {searchResults.map((item) => (
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

export default SearchResults;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const Main = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
