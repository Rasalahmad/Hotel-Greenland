import Skeleton from "react-loading-skeleton";
const Loader = ({ type }) => {
  return (
    <>
      {type === "allList" ? (
        <div className=" lg:flex gap-4 mt-4 lg:mt-auto mx-7">
          <Skeleton
            count={2}
            height={"300px"}
            width={"350px"}
            className="mb-4"
          />
          <Skeleton
            count={2}
            height={"300px"}
            width={"350px"}
            className="mb-4"
          />
          <Skeleton
            count={2}
            height={"300px"}
            width={"350px"}
            className="mb-4"
          />
        </div>
      ) : type === "List" ? (
        <div className="lg:flex gap-4 mt-4 lg:mt-auto lg:mx-10 mx-7">
          <Skeleton
            count={1}
            height={"300px"}
            width={"350px"}
            className="mb-4"
          />
          <Skeleton
            count={1}
            height={"300px"}
            width={"350px"}
            className="mb-4"
          />
          <Skeleton
            count={1}
            height={"300px"}
            width={"350px"}
            className="mb-4"
          />
        </div>
      ) : type === "Details" ? (
        <div>
          <div className="lg:flex gap-4 mt-4 lg:mt-auto lg:mx-24">
            <div>
              <Skeleton
                count={1}
                className="mb-4 lg:w-[10%] h-[50px] lg:h-[40px]"
              />
              <Skeleton
                count={1}
                className="mb-4 lg:w-[550px] lg:h-[300px] h-[200px]"
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
            <Skeleton
              count={1}
              style={{ marginTop: "62px" }}
              height={"500px"}
              width={"400px"}
              className="mb-4"
            />
          </div>
          <div className="hidden lg:flex justify-center gap-12 mt-4">
            <Skeleton
              count={1}
              height={"80px"}
              width={"200px"}
              className="mb-4"
            />
            <Skeleton
              count={1}
              height={"80px"}
              width={"200px"}
              className="mb-4"
            />
            <Skeleton
              count={1}
              height={"80px"}
              width={"200px"}
              className="mb-4"
            />
            <Skeleton
              count={1}
              height={"80px"}
              width={"200px"}
              className="mb-4"
            />
          </div>
          <div className="  mt-4 mx-28">
            <Skeleton
              count={1}
              height={"100px"}
              width={"100%"}
              className="mb-4"
            />

            <Skeleton
              count={1}
              height={"100px"}
              width={"100%"}
              className="mb-4"
            />
            <Skeleton
              count={1}
              height={"100px"}
              width={"100%"}
              className="mb-4"
            />
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="hidden lg:flex gap-4 mt-4 lg:mt-auto lg:mx-28">
              <Skeleton
                count={1}
                height={"500px"}
                width={"300px"}
                className="mb-4"
              />
              <div>
                <Skeleton
                  count={1}
                  height={"60px"}
                  width={"550px"}
                  className="mb-4"
                />
                <Skeleton
                  count={1}
                  height={"50px"}
                  width={"250px"}
                  className="mb-4"
                />
                <div>
                  <div className="lg:flex justify-between gap-2">
                    <Skeleton
                      count={5}
                      height={"60px"}
                      width={"280px"}
                      className="mb-16"
                    />
                    <Skeleton
                      count={5}
                      height={"60px"}
                      width={"280px"}
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
