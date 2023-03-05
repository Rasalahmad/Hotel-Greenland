import React from "react";
import styled from "styled-components";

const InputGroup = ({ first, second, type, type2 }) => {
  return (
    <div className="flex gap-5 my-8">
      <div className="w-1/2">
        <Label>{first}</Label>
        <Input type={type} />
      </div>
      <div className="w-1/2">
        <Label>{second}</Label>
        <Input type={type2} />
      </div>
    </div>
  );
};

export default InputGroup;

const Label = styled.div`
  color: gray;
`;

const Input = styled.input`
  background: #e9e9e9;
  padding: 7px 20px;
  margin: 11px 0;
  width: 100%;
`;
