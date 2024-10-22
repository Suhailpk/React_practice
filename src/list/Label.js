import React,{useContext} from "react";
import './Label.css'
import { MyContext } from "./List";

function Label(props){

    const label = useContext(MyContext)

    const style = props.isStock ? {background: 'green'} : {background: 'red'}
    const inventory = props.isStock ? "Stock In" : "Stock Out"
    if (label === false){
        return null
    }

    return <span onClick={() =>{
        props.onAction(props.isStock ? 'stockin':'stockout')
    }} className="label-section" style={style}>{inventory}</span>
}



export default Label;