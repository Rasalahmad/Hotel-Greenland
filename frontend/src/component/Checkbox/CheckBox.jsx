import React from "react";

const CheckBox = ({ id, value }) => {
  return (
    <div className="my-2">
      <input type="checkbox" id={id} />
      <label for={id} className="ml-2 cursor-pointer">
        {value}
      </label>
    </div>
  );
};

export default CheckBox;
