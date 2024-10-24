import React, { useContext, useRef} from "react";
import "./Label.css";
import { MyContext } from "./List";
import ToolTip from "./ToolTip";
import useShowToolTip from "../custom_hooks/useShowToolTip";

function Label(props) {
  const label = useContext(MyContext);
  const[showToolTip, setToolTip] = useShowToolTip()
  
  const refObj = useRef();

  const style = props.isStock ? { background: "green" } : { background: "red" };
  const inventory = props.isStock ? "Stock In" : "Stock Out";
  if (label === false) {
    return null;
  }

  const handleMouseEnter = (evt) => {
    console.log(refObj.current);

    // const width1 = evt.target.getBoundingClientRect().width;
    // const width2 = refObj.current.getBoundingClientRect().width;

    // refObj.current.style.left = `${-(width2 - width1) / 2}px`;

    setToolTip(true);
  };
  const handleMouseLeave = () => {
    setToolTip(false);
  };

  return (
    <>
      <span
        onClick={() => {
          props.onAction(props.isStock ? "stockin" : "stockout");
        }}
        className="label-section"
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {inventory}
      </span>
    <ToolTip refObj={refObj} showToolTip={showToolTip}/>
    </>
  );
}

export default Label;
