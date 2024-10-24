import React from "react";

const ToolTip = (props) => {
  const { refObj, showToolTip } = props;

  if (showToolTip === false) {
    return null;
  }

  return (
    <label ref={refObj} className="tooltip">
      This is {props.isStock ? "Stock In" : "Stock Out"} tooltip
    </label>
  );
};

export default ToolTip;
