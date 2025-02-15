import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCheck, FaTimes } from "react-icons/fa"; // Using FontAwesome icons

const RoomCard = () => {
  return (
    <CardContainer>
      {/* Single Room Card */}
      <Card>
        <CardContent>
          <CardTitle>Couple Room</CardTitle>
          <Ul>
            <ListItem>
              <FaCheck className="icon" /> Single Bed
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Bathroom
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> TV
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Room Service
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Desk
            </ListItem>
          </Ul>
          <Ul unavailable>
            <UnavailableLi>
              <FaTimes className="icon" /> Cots Available
            </UnavailableLi>
            <UnavailableLi>
              <FaTimes className="icon" /> Laundry Facilities
            </UnavailableLi>
            <UnavailableLi>
              <FaTimes className="icon" /> Linen and Towels Provided
            </UnavailableLi>
          </Ul>
          <Link to="/singleRooms">
            <Button>See Details</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Family Special Room Card */}
      <Card>
        <CardContent>
          <CardTitle>Family Special Room</CardTitle>
          <Ul>
            <ListItem>
              <FaCheck className="icon" /> Double Bed
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Bathroom
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> TV
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Coffee Kit
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Bathrobes and slippers
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Room Service
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Desk
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Balcony
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Hairdryer
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Complimentary toiletries
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Laundry Facilities
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Linen and Towels Provided
            </ListItem>
          </Ul>
          <Link to="/familySpecialRoom">
            <Button>See Details</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Double Room Card */}
      <Card>
        <CardContent>
          <CardTitle>Double Room</CardTitle>
          <Ul>
            <ListItem>
              <FaCheck className="icon" /> Double Bed
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Bathroom
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> TV
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Room Service
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Desk
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Balcony
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Hairdryer
            </ListItem>
            <ListItem>
              <FaCheck className="icon" /> Complimentary toiletries
            </ListItem>
          </Ul>
          <Ul unavailable>
            <UnavailableLi>
              <FaTimes className="icon" /> Laundry Facilities
            </UnavailableLi>
            <UnavailableLi>
              <FaTimes className="icon" /> Linen and Towels Provided
            </UnavailableLi>
          </Ul>
          <Link to="/doubleRooms">
            <Button>See Details</Button>
          </Link>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CardContent = styled.div`
  padding: 25px;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 26px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: ${({ unavailable }) => (unavailable ? "0" : "0 0 20px 0")};
  margin-bottom: 20px;
  border-bottom: ${({ unavailable }) =>
    unavailable ? "none" : "1px solid #eaeaea"};
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #34495e;
  margin-bottom: 10px;

  .icon {
    color: #27ae60;
    margin-right: 10px;
  }
`;

const UnavailableLi = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #95a5a6;
  margin-bottom: 10px;

  .icon {
    color: #e74c3c;
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

export default RoomCard;
