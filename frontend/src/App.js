import React from "react";
import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import { router } from "./Routes/Routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Container>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 95%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
