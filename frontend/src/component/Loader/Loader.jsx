import Skeleton from "react-loading-skeleton";
const Loader = () => {
  return (
    <div className=" lg:flex gap-8 lg:mx-8">
      <Skeleton count={1} height={"300px"} width={"400px"} />
      <Skeleton count={3} height={"300px"} width={"500px"} className="mb-4" />
    </div>
  );
};

export default Loader;
