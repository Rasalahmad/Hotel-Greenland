import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { RxSpaceEvenlyVertically } from "react-icons/rx";
import { BiBed, BiLaptop, BiDrink } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdBathroom } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { Link } from "react-router-dom";
import CheckBox from "../../../../component/Checkbox/CheckBox";
import axios from "axios";

const SingleRoom = () => {
  const facilities = [
    {
      id: 1,
      icon: <BsPersonCircle size={25} />,
      title: "2 Guests",
    },
    {
      id: 1,
      icon: <RxSpaceEvenlyVertically size={25} />,
      title: "30 Ft",
    },
    {
      id: 1,
      icon: <BiBed size={25} />,
      title: "1200 / Per Night",
    },
    {
      id: 1,
      icon: <SlCalender size={25} />,
      title: "8000 / 7 Night",
    },
  ];

  const services = [
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

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8800/api/getAllRoom").then((response) => {
      setData(response.data.data);
    });
  }, []);

  console.log(data);

  const [range, setRange] = useState(500);

  return (
    <Container>
      <Main>
        <Left>
          <h2 className="text-2xl my-5">Price Per Night</h2>
          <input
            className="w-52"
            type="range"
            onChange={(e) => setRange(e.target.value)}
            name="volume"
            min="500"
            max="2000"
          />
          <label for="volume" className="m-6">
            {range}
          </label>
          <div>
            <div>
              <h2 className="text-2xl my-5">Service</h2>
            </div>
            <div>
              <CheckBox id={"wd"} value={"Welcome Drink"} />
              <CheckBox id={"tv"} value={"Television"} />
              <CheckBox id={"sm"} value={"No Smoking"} />
              <CheckBox id={"pb"} value={"Private Bathroom"} />
              <CheckBox id={"br"} value={"Bike Rental"} />
              <CheckBox id={"kb"} value={"Kids Beds"} />
            </div>
            <div>
              <div>
                <h2 className="text-2xl my-5">Extra Service</h2>
              </div>
              <div>
                <CheckBox id={"clearing-fee"} value={"Cleaning Fee"} />
                <CheckBox id={"laundry"} value={"Laundry"} />
                <CheckBox id={"satellite-tv"} value={"Satellite TV"} />
                <CheckBox id={"car-rental"} value={"Car Rental"} />
                <CheckBox id={"breakfast"} value={"Breakfast"} />
                <CheckBox id={"lunch"} value={"Lunch"} />
              </div>
            </div>
          </div>
        </Left>
        <Right>
          {data.map((item) => (
            <Card>
              <Image src={item?.thumbnail} alt="" />
              <Content>
                <Title>{item?.name}</Title>
                <FContainer>
                  {facilities.slice(0, 2).map((f) => (
                    <Facilities>
                      {f.icon}
                      <p>{f.title}</p>
                    </Facilities>
                  ))}
                </FContainer>
                <Description>{item?.desc?.slice(0, 100)}</Description>
                <Link to="/booking">
                  <Button>BOOK NOW</Button>
                </Link>
                <hr />
                <FullInfo>
                  {services.map((s) => (
                    <Icons title={s.title}>{s.icon}</Icons>
                  ))}
                  <Link to={`/details/${item._id}`}>
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

const Left = styled.div`
  flex: 1;
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
  font-size: 36px;
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
