import React from "react";
import styled from "styled-components";
import NewsSlider from "../../../component/Carousel/News/NewsSlider";

const News = () => {
  const data = [
    {
      id: 1,
      title: "Cities To Visit For Your First Time In Bandarban",
      date: "31 December, 2022",
      image:
        "https://i0.wp.com/www.travelsolutiondesk.com/wp-content/uploads/2019/11/BANDARBAN.jpg?fit=640%2C426&ssl=1",
      link: "https://www.prothomalo.com/video/bangladesh/%E0%A6%AF%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%81%E0%A6%B6%E0%A6%BF%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%B0-%E0%A6%A4%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BE%E0%A6%AF%E0%A6%BC-%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%BF-plung-mrus-in-bandarban",
    },
    {
      id: 2,
      title: "Cities To Visit For Your First Time In Bandarban",
      date: "31 December, 2022",
      image:
        "https://i0.wp.com/www.travelsolutiondesk.com/wp-content/uploads/2019/12/GOLDEN-TEMPLE.jpg?fit=640%2C480&ssl=1",
      link: "https://www.prothomalo.com/video/bangladesh/%E0%A6%AF%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%81%E0%A6%B6%E0%A6%BF%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%B0-%E0%A6%A4%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BE%E0%A6%AF%E0%A6%BC-%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%BF-plung-mrus-in-bandarban",
    },
    {
      id: 3,
      title: "Cities To Visit For Your First Time In Bandarban",
      date: "31 December, 2022",
      image:
        "https://i0.wp.com/www.travelsolutiondesk.com/wp-content/uploads/2019/12/NILACHOL.jpg?fit=640%2C463&ssl=1",
      link: "https://www.prothomalo.com/video/bangladesh/%E0%A6%AF%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%81%E0%A6%B6%E0%A6%BF%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%B0-%E0%A6%A4%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BE%E0%A6%AF%E0%A6%BC-%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%BF-plung-mrus-in-bandarban",
    },
    {
      id: 4,
      title: "My 6 Biggest Travel Surprises",
      date: "31 December, 2022",
      image: "https://dailyasianage.com/library/1492152118_5.jpg",
      link: "https://www.prothomalo.com/video/bangladesh/%E0%A6%AF%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%81%E0%A6%B6%E0%A6%BF%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%B0-%E0%A6%A4%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BE%E0%A6%AF%E0%A6%BC-%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%BF-plung-mrus-in-bandarban",
    },
  ];

  return (
    <>
      <Content>
        <Title>News & Offers</Title>
        <Description>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </Description>
        <NewsSlider data={data} />
      </Content>
    </>
  );
};

export default News;

const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
`;

const Description = styled.div`
  font-size: 22px;
  line-height: 40px;
  padding: 50px;
  color: gray;
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 30px;
    padding: 10px;
  }
`;
const Content = styled.div`
  max-width: 80%;
  text-align: center;
  margin: auto;
  padding-top: 100px;
`;
