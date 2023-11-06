import React, { useContext } from "react";
import { useGetUserBookingQuery } from "../../features/booking/bookingApi";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../component/Loader/Loader";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError, error } = useGetUserBookingQuery(
    user?.email
  );
  console.log(data?.data);
  return (
    <div>
      {!data || isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div>
            {/* {data.map((item, i) => (
              <div key={item?._id}>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            ))} */}
            <>length:{data?.data?.total_amount}</>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
