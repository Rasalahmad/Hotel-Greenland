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
import SingleRoom from "../../pages/Home/Rooms/SingleRoom/SingleRoom";
import FamilyRoom from "../../pages/Home/Rooms/Special/FamilyRoom";
import Contact from "../../pages/Contact/Contact";
import SuccessView from "../../component/Success/SuccessView";
import Orders from "../../pages/Orders/Orders";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import PrivateRoute from "../Private/PrivateRoute";
import Blog from "../../pages/Blog/Blog";
import AboutUs from "../../pages/AboutUs/AboutUs";
import SearchResults from "../../pages/Home/Rooms/SearchResults/SearchResults";
import CancelView from "../../component/Success/CancelView";
import FailView from "../../component/Success/FailView";
import Details from "../../pages/Home/Rooms/components/Details";

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
        path: "/search-results",
        element: <SearchResults />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/booking/:roomId",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
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
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/payment/success/:transaction_Id",
    element: <SuccessView />,
  },
  {
    path: "/payment/cancel/:transaction_Id",
    element: <CancelView />,
  },
  {
    path: "/payment/fail/:transaction_Id",
    element: <FailView />,
  },
]);
