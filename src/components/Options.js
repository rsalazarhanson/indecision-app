import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <h2>These are your options:</h2>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.length === 0 && <p>Please add an option to get started.</p>}

    <ol>
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
