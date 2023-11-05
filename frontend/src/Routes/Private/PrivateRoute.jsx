/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div>
        <Skeleton count={1} className="w-[90vw] mx-auto" />
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
