import React from 'react';
import styled from "styled-components";
import BlogSlider from './BlogSlider';
const Blog = () => {

    const data = [
        {
            id: 1,
            image: "http://wahabali.com/work/pearl-demo/images/news-img1.jpg",
            userimage: "http://wahabali.com/work/pearl-demo/images/news-cheff1.jpg",
            title: "Spicy Food",
            blog: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
            comment: "2",
            date: "23,4,2023"
        },
        {
            id: 2,
            image: "http://wahabali.com/work/pearl-demo/images/news-img2.jpg",
            userimage: "http://wahabali.com/work/pearl-demo/images/news-cheff2.jpg",
            title: "Spicy Food",
            blog: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
            comment: "2",
            date: "23,4,2023"
        },
        {
            id: 3,
            image: "http://wahabali.com/work/pearl-demo/images/news-img3.jpg",
            userimage: "http://wahabali.com/work/pearl-demo/images/news-cheff3.jpg",
            title: "Spicy Food",
            blog: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
            comment: "2",
            date: "23,4,2023"
        },

    ]
    return (
        <div className='mb-24'>
            <div className='text-center'> <Title>Latest Posts</Title>
                <Header1>FROM THE BLOG</Header1></div>
            <BlogSlider data={data} />
        </div>
    );
};

export default Blog;


const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align:center;
  margin-top:60px;
`;

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