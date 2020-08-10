import React from "react";

const Option = (props) => (
  <div>
    <li>{props.optionText}</li>
    <button
      onClick={(event) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
