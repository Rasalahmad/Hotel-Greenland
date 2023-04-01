import { createBrowserRouter } from "react-router-dom";
import Restaurant from "../../component/RestaurantSite/Restaurant/Restaurant/Restaurant";
import Menu from "../../component/RestaurantSite/Services/Menu/Menu";
import OurStory from "../../component/RestaurantSite/Services/OurStory/OurStory";
import SpecialMenu from "../../component/RestaurantSite/Services/SpecialMenu/SpecialMenu";
import Main from "../../LayOut/Main";
import Booking from "../../pages/Booking/Booking";
import Home from "../../pages/Home/Home/Home";
import AllRooms from "../../pages/Home/Rooms/AllRoom/AllRooms";
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
        path: "/singleRooms",
        element: <SingleRoom />,
      },
      {
        path: "/room/:roomId",
        element: <Details />,
      },
      {
        path: "/doubleRooms",
        element: <DoubleRoom />,
      },
      {
        path: "/familySpecialRoom",
        element: <FamilyRoom />,
      },
      {
        path: "/allRoom",
        element: <AllRooms />,
      },
      {
        path: "/booking/:roomId",
        element: <Booking />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/restaurant/specialMenu",
        element: <SpecialMenu />,
      },
      {
        path: "/restaurant/ourStory",
        element: <OurStory />,
      },
      {
        path: "/restaurant/menu",
        element: <Menu />,
      },
    ],
  },
]);
