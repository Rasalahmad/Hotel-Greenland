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
        "https://ik.imagekit.io/tvlk/blog/2020/04/Hotel-Room-Types_4.jpg?tr=dpr-2,w-675",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1VsGVsQ3kvo46Rb2GLnWeOlKbxP0yI2bqsCGi44MtArP-5hMQr844GYYxlO9J9VqSRus&usqp=CAU",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQsg_PbxjqrOWcaLqIzkSw3r5heuZyS-3w3X9amvONwPHwNdHUAPGKV7VCC-Cal-Bs6k&usqp=CAU",
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
