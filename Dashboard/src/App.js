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

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="hotels">
              <Route index element={<List />} />
              <Route path=":roomId" element={<Single />} />
              <Route
                path="roomForm"
                element={<RoomForm inputs={roomInputs} title="Add New Room" />}
              />
            </Route>
            <Route path="transaction">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="committeeForm"
                element={
                  <CommitteeForm
                    inputs={committeeInputs}
                    title="Add New Member"
                  />
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
