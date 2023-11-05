import React, { useContext } from "react";
import { useGetUserBookingQuery } from "../../features/booking/bookingApi";
import { AuthContext } from "../../Context/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError, error } = useGetUserBookingQuery(
    user?.email
  );
  console.log(data);
  return (
    <div>
      <p>Orders tracking</p>
    </div>
  );
};

export default Orders;
