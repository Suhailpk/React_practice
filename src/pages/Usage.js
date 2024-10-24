import React, { useReducer, useState } from "react";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import "./Usage.css";
import useValueReducer from "../reducer/useValueReducer";

const intialValue = {
    value:0
}

const Usage = (props) => {
  const { onAction } = props;

  const [state, dispatch] = useReducer(useValueReducer, intialValue);
  const [color, setColor] = useState('white')

  return (
    <>
      <div className="my-app">
        <Header onAction={onAction} />
      </div>
      <div className="app-body">
        <h1>Usage page</h1>
        <div className="usage">
          <div className="usage-item" style={{ background: color }}>
            <button
              onClick={() => {
                dispatch({
                    type:'change-value',
                    payload: 1
                });
              }}
            >
              Increment
            </button>
            <label>{state.value}</label>
            <button
              onClick={() => {
                dispatch({
                    type:'change-value',
                    payload: -1
                });
              }}
            >
              Decrement
            </button>
          </div>
          <button
            onClick={() => {
                setColor('green')
            }}
          >
            Green
          </button>
          <button
            onClick={() => {
               setColor('red')
            }}
          >
            Red
          </button>
        </div>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </>
  );
};

export default Usage;
