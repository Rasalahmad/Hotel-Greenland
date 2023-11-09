import React from "react";
import styled from "styled-components";
import { useGetRestaurantQuery } from "../../../../features/restaurant/restaurantApi";

import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import Loader from "../../../Loader/Loader";
const SpecialMenu = () => {
  const {
    data: restaurantData,
    isLoading,
    isError,
    error,
  } = useGetRestaurantQuery();
  console.log(restaurantData);
  let content = null;
  if (isLoading) {
    content = <Loader type={"List"} />;
  } else if (!isLoading && isError) {
    content = <p>{error}</p>;
  } else if (!isLoading && !isError && restaurantData?.data?.length === 0) {
    content = <p>No Item Available</p>;
  } else {
    content = (
      <div>
        <Container>
          <Flex>
            {restaurantData.data && (
              <LeftSide data={restaurantData.data}></LeftSide>
            )}
            {restaurantData.data && (
              <RightSide data={restaurantData.data}></RightSide>
            )}
          </Flex>
        </Container>
      </div>
    );
  }
  return content;
};

export default SpecialMenu;

const Container = styled.div`
  width: 95%;
  margin: auto;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  @media (max-width: 768px) {
    display: block;
  }
`;
