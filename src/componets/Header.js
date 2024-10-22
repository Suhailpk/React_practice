import React from "react";
import './Header.css'

function Header(props){

    const{
        onAction
    } = props

    return (
        <div className="app-header">
            <div className="header-item">
                <span onClick={()=>{
                    onAction('google')
                }} value={'google'} className="test">Google</span>
                <span onClick={()=>{
                    onAction('home')
                }} value={"home"}>Home</span>
                <span onClick={()=>{
                    onAction('usage')
                }} value={'usage'}>Usage</span>
                <span onClick={()=>{
                    onAction('settings')
                }} value={"settings"}>Settings</span>
            </div>
        </div>
    )
}

export default Header;