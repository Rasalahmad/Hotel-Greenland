import React, { useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { RxSpaceEvenlyVertically } from "react-icons/rx";
import { BiBed, BiLaptop, BiDrink } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdBathroom } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { Link } from "react-router-dom";
import CheckBox from "../../../../component/Checkbox/CheckBox";

const SingleRoom = () => {
  const data = [
    {
      id: 1,
      thumbnail:
        "data:image/jpeg;base64,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",
      images: [
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
      ],
      name: "Single Room - 101",
      guests: 4,
      space: "30 Ft",
      price: 1500,
      weekPrice: "8000",
      desc: "Cras malesuada mauris tortor, id tempus mauris blandit sit amet. Morbi a velit efficitur, porttitor metus et, interdum nunc. Phasellus ut elementum diam. Aliquam erat volutpat. Nunc et facilisis elit. Donec consectetur nibh vel gravida aliquet. Suspendisse sit amet lectus tristique, condimentum libero vel, porta justo. Proin sit amet porta nibh. Pellentesque leo lorem, blandit quis hendrerit a, suscipit dapibus nulla. Aenean ut facilisis felis. Cras tincidunt elementum neque, id viverra magna viverra et. Nam tincidunt urna sed urna vehicula fringilla. Curabitur bibendum dictum nunc, ut elementum nibh efficitur gravida. Phasellus luctus scelerisque libero, nec lobortis tortor volutpat at. Nam vitae turpis in est tristique placerat id sed tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus tempus fermentum.",
      service: [
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
      ],
      around: [
        {
          id: 1,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/04/vert-4.jpg",
          title: "Lounge Bar",
        },
        {
          id: 2,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert3.jpeg",
          title: "Resturant",
        },
        {
          id: 3,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert1.jpeg",
          title: "Wellness",
        },
      ],
      facilities: [
        {
          id: 1,
          icon: <BsPersonCircle size={25} />,
          title: "4 Guests",
        },
        {
          id: 1,
          icon: <RxSpaceEvenlyVertically size={25} />,
          title: "30 Ft",
        },
        {
          id: 1,
          icon: <BiBed size={25} />,
          title: "1500 / Per Night",
        },
        {
          id: 1,
          icon: <SlCalender size={25} />,
          title: "8500 / 7 Night",
        },
      ],
    },
    {
      id: 1,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtB1ZSk3fhWfWGUdZhFPR9aNyPH33r-C6Kcw&usqp=CAU",
      images: [
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
      ],
      name: "Single Room - 102",
      guests: 4,
      space: "30 Ft",
      price: 1500,
      weekPrice: "8000",
      desc: "Cras malesuada mauris tortor, id tempus mauris blandit sit amet. Morbi a velit efficitur, porttitor metus et, interdum nunc. Phasellus ut elementum diam. Aliquam erat volutpat. Nunc et facilisis elit. Donec consectetur nibh vel gravida aliquet. Suspendisse sit amet lectus tristique, condimentum libero vel, porta justo. Proin sit amet porta nibh. Pellentesque leo lorem, blandit quis hendrerit a, suscipit dapibus nulla. Aenean ut facilisis felis. Cras tincidunt elementum neque, id viverra magna viverra et. Nam tincidunt urna sed urna vehicula fringilla. Curabitur bibendum dictum nunc, ut elementum nibh efficitur gravida. Phasellus luctus scelerisque libero, nec lobortis tortor volutpat at. Nam vitae turpis in est tristique placerat id sed tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus tempus fermentum.",
      service: [
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
      ],
      around: [
        {
          id: 1,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/04/vert-4.jpg",
          title: "Lounge Bar",
        },
        {
          id: 2,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert3.jpeg",
          title: "Resturant",
        },
        {
          id: 3,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert1.jpeg",
          title: "Wellness",
        },
      ],
      facilities: [
        {
          id: 1,
          icon: <BsPersonCircle size={25} />,
          title: "4 Guests",
        },
        {
          id: 1,
          icon: <RxSpaceEvenlyVertically size={25} />,
          title: "30 Ft",
        },
        {
          id: 1,
          icon: <BiBed size={25} />,
          title: "1500 / Per Night",
        },
        {
          id: 1,
          icon: <SlCalender size={25} />,
          title: "8500 / 7 Night",
        },
      ],
    },
    {
      id: 1,
      thumbnail:
        "https://scdn.aro.ie/Sites/50/imperialhotels2022/uploads/images/FullLengthImages/Small/Royal_National_Standard_Single_4.jpg",
      images: [
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
      ],
      name: "Single Room - 103",
      guests: 4,
      space: "30 Ft",
      price: 1500,
      weekPrice: "8000",
      desc: "Cras malesuada mauris tortor, id tempus mauris blandit sit amet. Morbi a velit efficitur, porttitor metus et, interdum nunc. Phasellus ut elementum diam. Aliquam erat volutpat. Nunc et facilisis elit. Donec consectetur nibh vel gravida aliquet. Suspendisse sit amet lectus tristique, condimentum libero vel, porta justo. Proin sit amet porta nibh. Pellentesque leo lorem, blandit quis hendrerit a, suscipit dapibus nulla. Aenean ut facilisis felis. Cras tincidunt elementum neque, id viverra magna viverra et. Nam tincidunt urna sed urna vehicula fringilla. Curabitur bibendum dictum nunc, ut elementum nibh efficitur gravida. Phasellus luctus scelerisque libero, nec lobortis tortor volutpat at. Nam vitae turpis in est tristique placerat id sed tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus tempus fermentum.",
      service: [
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
      ],
      around: [
        {
          id: 1,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/04/vert-4.jpg",
          title: "Lounge Bar",
        },
        {
          id: 2,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert3.jpeg",
          title: "Resturant",
        },
        {
          id: 3,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert1.jpeg",
          title: "Wellness",
        },
      ],
      facilities: [
        {
          id: 1,
          icon: <BsPersonCircle size={25} />,
          title: "4 Guests",
        },
        {
          id: 1,
          icon: <RxSpaceEvenlyVertically size={25} />,
          title: "30 Ft",
        },
        {
          id: 1,
          icon: <BiBed size={25} />,
          title: "1500 / Per Night",
        },
        {
          id: 1,
          icon: <SlCalender size={25} />,
          title: "8500 / 7 Night",
        },
      ],
    },
    {
      id: 1,
      thumbnail:
        "https://scdn.aro.ie/Sites/50/imperialhotels2022/uploads/images/FullLengthImages/Small/Bedford_Hotel_Single_Room_2_2.jpg",
      images: [
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
      ],
      name: "Single Room - 104",
      guests: 4,
      space: "30 Ft",
      price: 1500,
      weekPrice: "8000",
      desc: "Cras malesuada mauris tortor, id tempus mauris blandit sit amet. Morbi a velit efficitur, porttitor metus et, interdum nunc. Phasellus ut elementum diam. Aliquam erat volutpat. Nunc et facilisis elit. Donec consectetur nibh vel gravida aliquet. Suspendisse sit amet lectus tristique, condimentum libero vel, porta justo. Proin sit amet porta nibh. Pellentesque leo lorem, blandit quis hendrerit a, suscipit dapibus nulla. Aenean ut facilisis felis. Cras tincidunt elementum neque, id viverra magna viverra et. Nam tincidunt urna sed urna vehicula fringilla. Curabitur bibendum dictum nunc, ut elementum nibh efficitur gravida. Phasellus luctus scelerisque libero, nec lobortis tortor volutpat at. Nam vitae turpis in est tristique placerat id sed tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus tempus fermentum.",
      service: [
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
      ],
      around: [
        {
          id: 1,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/04/vert-4.jpg",
          title: "Lounge Bar",
        },
        {
          id: 2,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert3.jpeg",
          title: "Resturant",
        },
        {
          id: 3,
          image:
            "http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/apartments/wp-content/uploads/sites/4/2022/05/vert1.jpeg",
          title: "Wellness",
        },
      ],
      facilities: [
        {
          id: 1,
          icon: <BsPersonCircle size={25} />,
          title: "4 Guests",
        },
        {
          id: 1,
          icon: <RxSpaceEvenlyVertically size={25} />,
          title: "30 Ft",
        },
        {
          id: 1,
          icon: <BiBed size={25} />,
          title: "1500 / Per Night",
        },
        {
          id: 1,
          icon: <SlCalender size={25} />,
          title: "8500 / 7 Night",
        },
      ],
    },
  ];

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
                  {item?.facilities.slice(0, 2).map((f) => (
                    <Facilities>
                      {f.icon}
                      <p>{f.title}</p>
                    </Facilities>
                  ))}
                </FContainer>
                <Description>{item.desc.slice(0, 100)}</Description>
                <Link to="/booking">
                  <Button>BOOK NOW</Button>
                </Link>
                <hr />
                <FullInfo>
                  {item.service.map((s) => (
                    <Icons title={s.title}>{s.icon}</Icons>
                  ))}
                  <Link to={`/details/${item.id}`}>
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
