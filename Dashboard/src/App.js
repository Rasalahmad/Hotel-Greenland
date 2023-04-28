import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import CommitteeForm from "./pages/new/CommitteeForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { committeeInputs, roomInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import RoomForm from "./pages/new/RoomForm";
import { LoginContext } from "./context/loginContext";

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
            <Route path="transaction">
              <Route index element={isLoggedIn ? <List /> : <Login />} />
              <Route
                path=":productId"
                element={isLoggedIn ? <Single /> : <Login />}
              />
              <Route
                path="committeeForm"
                element={
                  isLoggedIn ? (
                    <CommitteeForm
                      inputs={committeeInputs}
                      title="Add New Member"
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
