import React from "react";
import Label from "./Label";
import './ListItem.css'


function ListItem(props){
    const {
        title,
        descr,
        isStock,
        onDelete,
        onAction
    } = props;
    return (
        <>
        <div className="list-section">
            <div className="list-header">
                <h3>{title}</h3>
            </div><div className="list-descr">
                    {descr}
                </div><div className="list-item">
                    <Label onAction={onAction} isStock={isStock}/>
                    <div className="delete-section">
                        <button onClick={onDelete} className="delete-button">Delete</button>
                    </div>
                </div>
        </div></>
    );
}

export default ListItem;