import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

export default ErrorMessage;

const Message = styled.div`
  color: red;
`;
