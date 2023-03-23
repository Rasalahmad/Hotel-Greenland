import React from 'react';
import styled from 'styled-components';
const MasterChef = () => {
    const data = [
        {
            id: 1,
            userimage: "http://wahabali.com/work/pearl-demo/images/cheff-img3.jpg",
            name: "Milla Rose",
            blog: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
            comment: "2",
            date: "23,4,2023"
        },
        {
            id: 2,

            userimage: "http://wahabali.com/work/pearl-demo/images/cheff-img4.jpg",
            name: "Milla Rose",
            blog: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
            comment: "2",
            date: "23,4,2023"
        },
        {
            id: 3,

            userimage: "http://wahabali.com/work/pearl-demo/images/cheff-img2.jpg",
            name: "Milla Rose",
            blog: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
            comment: "2",
            date: "23,4,2023"
        },


    ]
    return (
        <div className='mt-10'>
            <Description className="lg:p-5">
                <Title>Master Chef</Title>
                <Header>OUR EXPERTISE</Header>
            </Description>

            <div className='lg:flex justify-around gap-8 px-4 '>
                {
                    data.map((item) => (
                        <div key={item?.id} className='mt-3'>
                            <div className=''>
                                <img className=' rounded-lg' src={item?.userimage} alt="" />

                                <p className="text-2xl text-center font-semibold my-4">{item?.name}</p>
                                <p className='text-center '>{item?.blog}</p>

                            </div>
                        </div>
                    ))}
            </div>

        </div>
    );
};

export default MasterChef;
const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin-top: 60px;
`;
const Description = styled.div`
  font-size: 23px;
  line-height: 40px;
  padding: 3px 35px 35px 35px;
  text-align: center;
  color: gray;
`;

const Header = styled.div`
  background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
    no-repeat center 80px;
  letter-spacing: 4px;
  padding: 0 0 70px 0;
  margin: 40px 0 0 0;
  font-size: 50px;
  @media (max-width: 640px) {
    background: url(http://wahabali.com/work/pearl-demo/images/heading-dark.png)
      no-repeat center 80px;
    font-size: 35px;
    letter-spacing: 0;
    margin-bottom: 50px;
  }
`;