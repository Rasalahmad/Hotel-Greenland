import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Checkout from "../../component/Checkout/Checkout";
import BookingForm from "../../component/Form/BookingForm";
import { Navigate, Route, useNavigate, useParams } from "react-router-dom";
import { useGetRoomQuery } from "../../features/rooms/roomApi";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import {
  useCreateBookingMutation,
  useMarkUnavailableMutation,
} from "../../features/booking/bookingApi";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../component/Loader/Loader";

const Booking = () => {
  const { roomId } = useParams();
  const { numberOfDays } = useSelector((state) => state.room);
  const { data: room, isLoading, isError, error } = useGetRoomQuery(roomId);

  const {
    _id,
    name,
    guests,
    price,
    thumbnail,
    unavailableDates,
    desc,
    isAvailable,
  } = room?.data || {};
  const [payLater, setPayLater] = useState("");

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      dates.push(`${year}-${month}-${day}`);
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(
    new Date(numberOfDays?.startDate),
    new Date(numberOfDays?.endDate)
  );

  const isFound = unavailableDates?.some((date) =>
    alldates.includes(moment(date).format("YYYY-MM-DD"))
  );

  // useEffect(() => {
  //   if (isFound) {
  //     const res = axios.put(
  //       `http://localhost:5000/api/room/makeUnavailable/${_id}`,
  //       {
  //         isAvailable: "Unavailable",
  //       }
  //     );
  //     return res.data;
  //   }
  // }, [_id, isFound]);

  const [markUnavailable] = useMarkUnavailableMutation();
  const [createBooking] = useCreateBookingMutation();

  const notify = () => toast.error("This room is not available for now");

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      price: Number(numberOfDays?.night) * Number(price),
      roomName: name,
      img: thumbnail,
      paymentStatus: "pending",
      bookingDates: alldates,
      paymentMethod: payLater ? "Unpaid" : "",
      guests: guests,
      desc: desc,
      isAvailable: isAvailable,
    };
    axios
      .post("http://localhost:5000/api/booking/payment", finalData)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          window.location.replace(res.data.data);
        }
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
        // Handle the error here
      });
  };

  let content = null;

  if (isLoading) {
    content = <Loader type={""} />;
  } else if (!isLoading && isError) {
    content = <p>{error}</p>;
  } else {
    content = (
      <Container>
        <Checkout
          style={{ flex: "1" }}
          image={thumbnail}
          title={`YOUR RESERVATION`}
          guests={guests}
          btnText={"Total"}
          price={price}
          room={room}
          name={name}
        />
        <BookingForm
          style={{ flex: "4" }}
          price={price}
          img={thumbnail}
          name={name}
          onSubmit={onSubmit}
          payLater={payLater}
          setPayLater={setPayLater}
          isFound={isFound}
        />
      </Container>
    );
  }

  return content;
};

export default Booking;

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  gap: 50px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
