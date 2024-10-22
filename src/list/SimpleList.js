import React from "react";
import ListItem from "./ListItem";

function SimpleList(props){
    const{
        newList,
        onAction,
        onActionCheck,
    } = props

    return(
        <div className="app-body">
                    {
                        newList.map((obj) =>{
                            return <ListItem key={obj.title}
                                            title={obj.title} 
                                            descr={obj.descr} 
                                            isStock={obj.isStock}
                                            onDelete={()=>{
                                                onAction(obj)
                                            }}
                                            onAction={onActionCheck}
                                            />
                        })
                    }
                </div>
    )
}

export default SimpleList