import React from "react";
import "./InputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color, fontSize: "2.2rem" }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
