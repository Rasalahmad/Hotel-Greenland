import Skeleton from "react-loading-skeleton";
const Loader = ({ type }) => {
  return (
    <>
      {type === "allList" ? (
        <>
          <div className="hidden lg:flex gap-4 mt-4 lg:mt-auto mx-7">
            <Skeleton
              count={2}
              height={"300px"}
              width={"400px"}
              className="mb-4"
            />
            <Skeleton
              count={2}
              height={"300px"}
              width={"400px"}
              className="mb-4"
            />
            <Skeleton
              count={2}
              height={"300px"}
              width={"400px"}
              className="mb-4"
            />
          </div>
          <div className=" lg:hidden gap-4 mt-4 lg:mt-auto mx-7">
            <Skeleton
              count={2}
              height={"300px"}
              width={"100%"}
              className="mb-4"
            />
            <Skeleton
              count={2}
              height={"300px"}
              width={"100%"}
              className="mb-4"
            />
            <Skeleton
              count={2}
              height={"300px"}
              width={"100%"}
              className="mb-4"
            />
          </div>
        </>
      ) : type === "List" ? (
        <>
          <div className="hidden lg:flex gap-4 mt-4 lg:mt-auto lg:mx-10 mx-7">
            <Skeleton
              count={1}
              height={"300px"}
              width={"400px"}
              className="mb-4"
            />
            <Skeleton
              count={1}
              height={"300px"}
              width={"400px"}
              className="mb-4"
            />
            <Skeleton
              count={1}
              height={"300px"}
              width={"400px"}
              className="mb-4"
            />
          </div>
          <div className="lg:hidden gap-4 mt-4 lg:mt-auto lg:mx-10 mx-7">
            <Skeleton
              count={1}
              height={"300px"}
              width={"100%"}
              className="mb-4"
            />
            <Skeleton
              count={1}
              height={"300px"}
              width={"100%"}
              className="mb-4"
            />
            <Skeleton
              count={1}
              height={"300px"}
              width={"100%"}
              className="mb-4"
            />
          </div>
        </>
      ) : type === "Details" ? (
        <div>
          <div className=" lg:flex gap-4 mt-4 lg:mt-auto lg:mx-28 mx-2">
            <div className="hidden lg:block">
              <Skeleton
                count={2}
                height={"40px"}
                width={"40%"}
                className="mb-4 "
              />
              <Skeleton
                count={1}
                height={"400px"}
                width={"600px"}
                className="mb-4"
              />
              <div className="flex justify-center gap-3">
                <Skeleton
                  count={1}
                  height={"60px"}
                  width={"150px"}
                  className="mb-4"
                />
                <Skeleton
                  count={1}
                  height={"60px"}
                  width={"150px"}
                  className="mb-4"
                />
                <Skeleton
                  count={1}
                  height={"60px"}
                  width={"150px"}
                  className="mb-4"
                />
              </div>
            </div>
            <div className=" lg:hidden ">
              <Skeleton
                count={2}
                height={"30px"}
                width={"70%"}
                className="mb-4 "
              />
              <Skeleton
                count={1}
                height={"300px"}
                width={"100%"}
                className="mb-4"
              />
              <div className="flex justify-center gap-3">
                <Skeleton
                  count={1}
                  height={"50px"}
                  width={"70px"}
                  className="mb-4"
                />
                <Skeleton
                  count={1}
                  height={"50px"}
                  width={"70px"}
                  className="mb-4"
                />
                <Skeleton
                  count={1}
                  height={"50px"}
                  width={"70px"}
                  className="mb-4"
                />
              </div>
            </div>
            <Skeleton
              count={1}
              style={{ marginTop: "120px" }}
              height={"550px"}
              width={"470px"}
              className="mb-4"
            />
          </div>
          <div className="hidden lg:block gap-1 mt-4 mx-24">
            <Skeleton
              count={2}
              height={"80px"}
              width={"100%"}
              className="mb-4"
            />
            <Skeleton
              count={2}
              height={"80px"}
              width={"100%"}
              className="mb-4"
            />
          </div>
          <div className=" lg:hidden  flex justify-between gap-1 mt-4 mx-3">
            <Skeleton
              count={2}
              height={"80px"}
              width={"180px"}
              className="mb-4"
            />
            <Skeleton
              count={2}
              height={"80px"}
              width={"180px"}
              className="mb-4"
            />
          </div>
        </div>
      ) : type === "booking" ? (
        <>
          <div>
            <Skeleton
              count={1}
              height={"80px"}
              width={"100%"}
              className="mb-10"
            />
            <Skeleton
              count={2}
              height={"60px"}
              width={"100%"}
              className="mb-4"
            />
            <Skeleton
              count={2}
              height={"60px"}
              width={"100%"}
              className="mb-4"
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="hidden lg:flex gap-10 mt-4 lg:mt-auto lg:mx-24">
              <Skeleton
                count={1}
                height={"500px"}
                width={"400px"}
                className="mb-4"
              />
              <div>
                <Skeleton
                  count={1}
                  height={"60px"}
                  width={"590px"}
                  className="mb-4"
                />
                <Skeleton
                  count={1}
                  height={"30px"}
                  width={"290px"}
                  className="mb-4"
                />
                <div>
                  <div className="lg:flex justify-between gap-2">
                    <Skeleton
                      count={5}
                      height={"60px"}
                      width={"300px"}
                      className="mb-16"
                    />
                    <Skeleton
                      count={5}
                      height={"60px"}
                      width={"300px"}
                      className="mb-16"
                    />
                  </div>
                  <Skeleton count={1} height={"80px"} width={"280px"} />
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <Skeleton
                count={1}
                height={"300px"}
                width={"100%"}
                className="my-4"
              />
              <Skeleton
                count={4}
                height={"100px"}
                width={"100%"}
                className="my-4"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Loader;
