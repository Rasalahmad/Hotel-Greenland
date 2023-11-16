import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewsAndBlogInputs, roomInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import RoomForm from "./pages/new/RoomForm";
import { LoginContext } from "./context/loginContext";
import Booking from "./pages/single/Booking";
import Restaurant from "./pages/single/Restaurant.jsx";
import NewsAndBlogForm from "./pages/new/NewsAndBlogForm.jsx";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={isLoggedIn ? <Home /> : <Login />} />
            <Route path="hotels">
              <Route index element={isLoggedIn ? <List /> : <Login />} />
              <Route
                path=":roomId"
                element={isLoggedIn ? <Single /> : <Login />}
              />
              <Route
                path="roomForm"
                element={
                  isLoggedIn ? (
                    <RoomForm inputs={roomInputs} title="Add New Room" />
                  ) : (
                    <Login />
                  )
                }
              />
            </Route>
            <Route path="restaurant">
              <Route index element={isLoggedIn ? <List /> : <Login />} />
              <Route
                path=":restaurantTitle"
                element={isLoggedIn ? <Restaurant /> : <Login />}
              />
            </Route>

            <Route path="booking">
              <Route index element={isLoggedIn ? <List /> : <Login />} />
              <Route
                path=":bookingId"
                element={isLoggedIn ? <Booking /> : <Login />}
              />
            </Route>
            <Route path="reviews">
              <Route index element={isLoggedIn ? <List /> : <Login />} />
            </Route>
            <Route path="newsAndBlog">
              <Route index element={isLoggedIn ? <List /> : <Login />} />

              <Route
                path="/newsAndBlog/newsForm"
                element={
                  isLoggedIn ? (
                    <NewsAndBlogForm
                      inputs={NewsAndBlogInputs}
                      title="Add News and Blog"
                    />
                  ) : (
                    <Login />
                  )
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
