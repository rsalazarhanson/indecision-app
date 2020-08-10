import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  );
};

// ReactDOM.render(<Layout content={template} />, document.getElementById("app"));
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
