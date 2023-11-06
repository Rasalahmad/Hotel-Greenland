import Skeleton from "react-loading-skeleton";
import "./Loader.scss";
const Loader = ({ type }) => {
  return (
    <div className="container">
      {type === "List" ? (
        <>
          <Skeleton count={1} height={"40px"} width={"15%"} />
          <Skeleton count={6} height={"100px"} width={"100%"} />
        </>
      ) : type === "bookingDetails" ? (
        <>
          <div className="bookingDetails">
            <Skeleton count={1} height={"300px"} width={"500px"} />
            <div>
              <Skeleton count={1} height={"195px"} width={"600px"} />
              <Skeleton count={1} height={"100px"} width={"35%"} />
            </div>
          </div>
          <>
            <Skeleton count={1} height={"220px"} width={"100%"} />
          </>
        </>
      ) : type === "roomDetails" ? (
        <>
          <div className="roomDetails">
            <Skeleton count={1} height={"270px"} width={"400px"} />
            <Skeleton count={1} height={"270px"} width={"600px"} />
          </div>
          <Skeleton count={1} height={"220px"} width={"100%"} />
        </>
      ) : type === "restaurantDetails" ? (
        <div className="restaurantDetails">
          <Skeleton count={1} height={"430px"} width={"400px"} />
          <Skeleton count={3} height={"140px"} width={"600px"} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Loader;
