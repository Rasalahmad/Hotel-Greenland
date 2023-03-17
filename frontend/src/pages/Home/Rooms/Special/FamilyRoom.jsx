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

const FamilySpecial = () => {
  const data = [
    {
      id: 1,
      thumbnail:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
      name: "Family Special Room - 101",
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
          icon: <BiBed size={25} />,
          title: "1500 / Per Night",
        },
        {
          id: 1,
          icon: <RxSpaceEvenlyVertically size={25} />,
          title: "30 Ft",
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
        "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg",
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
      name: "Family Special Room - 102",
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
          icon: <BiBed size={25} />,
          title: "1500 / Per Night",
        },
        {
          id: 1,
          icon: <RxSpaceEvenlyVertically size={25} />,
          title: "30 Ft",
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
        "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
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
      name: "Family Special Room - 103",
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
          icon: <BiBed size={25} />,
          title: "1500 / Per Night",
        },
        {
          id: 1,
          icon: <RxSpaceEvenlyVertically size={25} />,
          title: "30 Ft",
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
        "https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg?compress=true&quality=80&w=800&dpr=1.3",
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
      name: "Family Special Room - 104",
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
            "https://rhotelgeelong.com.au/wp-content/uploads/2021/03/R-Hotel-Geelong-Hotel-Room-11.jpg",
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
          icon: <BiBed size={25} />,
          title: "1500 / Per Night",
        },
        {
          id: 1,
          icon: <RxSpaceEvenlyVertically size={25} />,
          title: "30 Ft",
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
          <label htmlFor="volume" className="m-6">
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
                  <Link to={`/room/${item.id}`}>
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

export default FamilySpecial;

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
  font-size: 26px;
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
