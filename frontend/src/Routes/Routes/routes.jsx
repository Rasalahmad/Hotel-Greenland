import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Booking from "../../pages/Booking/Booking";
import Home from "../../pages/Home/Home/Home";
import DoubleRoom from "../../pages/Home/Rooms/DoubleRoom/DoubleRoom";
import Details from "../../pages/Home/Rooms/SingleRoom/Details";
import SingleRoom from "../../pages/Home/Rooms/SingleRoom/SingleRoom";
import FamilyRoom from "../../pages/Home/Rooms/Special/FamilyRoom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singlaRoom",
        element: <SingleRoom />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/doubleRoom",
        element: <DoubleRoom />,
      },
      {
        path: "/familySpecialRoom",
        element: <FamilyRoom />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
    ],
  },
]);
