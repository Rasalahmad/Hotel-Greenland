import React from 'react';
import './Restaurant.css'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaMailBulk, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import Customers from '../../Customers/Customers';
import Blog from '../../Blog/Blog';
const Restaurant = () => {

  const restaurant = [
    {
      id: 1,
      title: 'Special Menu',
      Description: 'in this theme we are included many more restaurant font icons.',
      img: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3263791/restaurant-menu-icon-sm.png'
    },
    {
      id: 2,
      title: 'Elegant interior',
      Description: 'in this theme we are included many more restaurant font icons.',
      img: 'https://cdn-icons-png.flaticon.com/512/72/72662.png'
    },
    {
      id: 3,
      title: 'Fresh & Hot Food',
      Description: 'in this theme we are included many more restaurant font icons.',
      img: 'https://static.thenounproject.com/png/3342582-200.png'
    }
  ]
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const banner = 'http://wahabali.com/work/pearl-demo/images/book-table.jpg'

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Title> Introduction</Title>
        <div className='main-title'>
          <h1 className='h1'>OUR SERVICES</h1>
        </div>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan. interdum hendrerit lacinia.</Description>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-5 mt-9">
          {
            restaurant.map(item => (
              <div key={item?.id} className='mt-5'>
                <div className="serv-main-sec ">
                  <div className="service-sec-top-bg"></div>
                  <div className="service-sec">
                    <i class=" rounded-full card-bordered">
                      <img src={item?.img} alt='' />
                    </i>
                    <h6 className='text-3xl font-medium'>{item?.title}</h6>
                    <p className='text-xl font-normal mt-2'>{item?.Description}</p>
                    <a href="menu3.html">read more</a>
                  </div>
                  <div className="service-sec-bottom-bg"></div>
                </div>
              </div>

            ))
          }
        </div>
        <Left>
          {isMobile ? (
            <>

              <ImageContainer>
                <img className="image" src='http://wahabali.com/work/pearl-demo/images/today-special.jpg' alt="" />
              </ImageContainer>
              <Description className="lg:p-5">
                <Title>Discover</Title>
                <Header>OUR STORY</Header>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-sm md:text-xl  lg:text-xl' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan. interdum hendrerit lacinia.</p>
                  </div>

                </div>
                <Link to='/resturant'>VIEW FULL STORY</Link>

              </Description>
            </>
          ) : (
            <>
              <Description className="lg:p-5">
                <Title>Discover</Title>
                <Header>OUR STORY</Header>
                <div className='flex justify-between mb-6'>
                  <div>
                    <p className='text-sm md:text-xl lg:w-[480px] lg:text-xl' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan. interdum hendrerit lacinia.</p>
                  </div>

                </div>
                <Link to='/' className="underline text-lg text-gray-600 cursor-pointer">
                  LEARN MORE
                </Link>
              </Description>
              <ImageContainer>
                <img className="image" src='http://wahabali.com/work/pearl-demo/images/our-story.jpg' alt="" />
              </ImageContainer>
            </>
          )}
        </Left>



        {/*OUR STORY..............................  */}


        <Left>
          {isMobile ? (
            <>
              <Description className="lg:p-5">
                <Title>Today’s</Title>
                <Header>SPECIALS FOOD</Header>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-sm md:text-xl  lg:text-xl' >Blue Cheese Crackers with Grapes</p>
                  </div>
                  <div>
                    <p className='text-sm md:text-xl  lg:text-xl'>$12</p>
                  </div>
                </div>
                <Bottombordar />
                <Item>Chicken / Grapes / Pizza / Cheese / Herbs</Item>
              </Description>
              <ImageContainer>
                <img className="image" src='http://wahabali.com/work/pearl-demo/images/today-special.jpg' alt="" />
              </ImageContainer>
            </>
          ) : (
            <>
              <ImageContainer>
                <img className="image" src='http://wahabali.com/work/pearl-demo/images/today-special.jpg' alt="" />
              </ImageContainer>
              <Description className="lg:p-5 mt-8">
                <Title>Today’s</Title>
                <Header>SPECIALS FOOD</Header>
                <div className='flex justify-between lg:w-[480px] mt-10'>
                  <div>
                    <p className='text-sm md:text-xl  lg:text-xl'>Blue Cheese Crackers with Grapes</p>
                  </div>
                  <div>
                    <p className='text-sm md:text-xl  lg:text-xl'>$12</p>
                  </div>
                </div>
                <Bottombordar />
                <Item>Chicken / Grapes / Pizza / Cheese / Herbs</Item>
              </Description>
            </>
          )}
        </Left>


      </Container >
      {/* RESERVATION .....................*/}
      <div
        className="  bg-fixed md:bg-auto bg-cover bg-center py-20 "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='text-center lg:ml-24 lg:grid grid-cols-2'>
          <div>
            <Title>Book a Table</Title>
            <Header1>RESERVATION</Header1>
            <form onSubmit={handlerSubmit} >
              <div className='lg:grid grid-cols-2 gap-2 mx-3'>
                <div class=" col-span-2 mb-2 lg:mb-1">
                  <div class="field"><input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 "
                    type="text"
                    placeholder="Type Your Name"
                    name="user_name"
                    required /></div></div>

                <div class="lg:my-2"><div >
                  <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 "
                    type="date"
                    placeholder="Appointment Date"
                    name="user_appointmentDate"
                    required />
                </div></div>

                <div class="my-2"><div class="field basic-example2">
                  <select className="block  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 p-5" name="reserv_persons" id="reserv_persons">
                    <option value="">Choose A Time</option>
                    <option value="9:00am to 12:00pm">9:00am to 12:00pm</option>
                    <option value="12:00pm to 3:00pm">12:00pm to 3:00pm</option>
                    <option value="3:00pm to 6:00pm">3:00pm to 6:00pm</option>
                    <option value="6:00pm to 9:00pm">6:00pm to 9:00pm</option>
                    <option value="9:00pm to 12:00am">9:00pm to 12:00am</option>
                  </select>
                </div></div>
                <div class="lg:my-2"><div class="field">
                  <select className="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " name="reserv_persons" id="reserv_persons">
                    <option value="">Persons</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div></div>
                <div class="my-2"><div class="field">
                  <input className="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    type="email"
                    placeholder="Type Your Email"
                    name="user_email"
                    required /></div></div>
                <div class="col-span-2 lg:mt-1"><div >
                  <input className="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    name="reserv_phone"
                    type="number"
                    placeholder="Phone No" required /></div></div>
              </div>

              <div className=" mt-10">
                <button type='submit' className="btn btn-outline btn-wide hover:text-white">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Container>
        <Blog />
        <Customers />
        <div className='text-center'> <Title>Short Info</Title>
          <Header1>GET IN TOUCH</Header1></div>
        <div className=" py-10 mx-auto px-10  ">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase font-semibold text-3xl mb-7">Let's Get Together</h3>
              <ul className="space-y-1">
                <li className='flex text-xl'>
                  <FaRegClock className='mt-1 mr-2'></FaRegClock> 24/7
                </li>
                <li className='flex text-xl py-3'>
                  <FaPhoneAlt className='mt-1 mr-2'></FaPhoneAlt>  +8801810-058005
                </li>
                <li className='flex text-xl'>
                  <FaMailBulk className='mt-1 mr-2'></FaMailBulk> hotelgreenlandrestaurant@gmail.com

                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase font-semibold text-3xl ">Opening Hour</h3>
              <ul className="">
                <li className='flex justify-between'>
                  <span className='day'> Monday</span>
                  <span className='time'> 09 am - 10 pm</span>
                </li>
                <li className='flex justify-between'>
                  <span className='day'> Tuesday</span>
                  <span className='time'> 09 am - 10 pm</span>
                </li>
                <li className='flex justify-between'>
                  <span className='day'> Wednesday</span>
                  <span className='time'> 09 am - 10 pm</span>
                </li>
                <li className='flex justify-between'>
                  <span className='day'> Thursday</span>
                  <span className='time'> 09 am - 10 pm</span>
                </li>
                <li className='flex justify-between'>
                  <span className='day'> Friday</span>
                  <span className='time'> 11 am - 08 pm</span>
                </li>
                <li className='flex justify-between'>
                  <span className='day'> Saturday</span>
                  <span className='time'> 10 am - 11 pm</span>
                </li>
                <li className='flex justify-between'>
                  <span className='day'> Sunday</span>
                  <span className='time'> Closed </span>
                </li>
              </ul>
            </div>
            <div className="space-y-3 lg:space-x-6">
              <div className="uppercase font-semibold text-3xl lg:ml-6 mb-9">Instagram</div>
              <div className=' grid grid-cols-2 lg:grid-cols-3 gap-2'>
                <img src='http://wahabali.com/work/pearl-demo/images/instagram-img1.jpg' alt="food" />
                <img src='http://wahabali.com/work/pearl-demo/images/instagram-img3.jpg' alt="food" />
                <img src='http://wahabali.com/work/pearl-demo/images/instagram-img6.jpg' alt="food" />
                <img src='http://wahabali.com/work/pearl-demo/images/instagram-img5.jpg' alt="food" />
                <img src='http://wahabali.com/work/pearl-demo/images/instagram-img4.jpg' alt="food" />
                <img src='http://wahabali.com/work/pearl-demo/images/instagram-img2.jpg' alt="food" />
              </div>
            </div>
          </div>
        </div>
      </Container>

    </div >
  );
};

export default Restaurant;
const Container = styled.div`
  width: 95%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align:center;
  margin-top:60px;
`;


const Description = styled.div`
  font-size: 23px;
  line-height: 40px;
  padding: 3px 35px 35px 35px;
  text-align:center;
  color: gray;
`;


const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  .image {
    border-radius: ${({ isMobile }) =>
    isMobile ? "0px 40px 0 40px" : "40px 0 40px 0"};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 100px 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
  }
`;
const Header = styled.div`
  background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png) no-repeat center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  margin: 40px 0 0 0;
  font-size:50px;
  @media (max-width: 640px){ 
     background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png) no-repeat center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom:50px;
}
`
const Header1 = styled.div`
  background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png) no-repeat center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  font-size:50px;
  @media (max-width: 640px){ 
     background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png) no-repeat center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom:50px;
}
`
const Bottombordar = styled.div`
border-bottom: solid 1px #CCCCCC;
display: block;
padding: 0 0 14px 0;
`
const Item = styled.div`
text-align: left;
font-size: 16px;
color: #878787;
display: block;
margin: 14px 0 0 0;
font-family: 'Source Sans Pro', sans-serif;
`