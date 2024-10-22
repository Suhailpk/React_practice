import React from "react";


class Tools extends React.Component{
    
    render(){
        const{
            children,
            onAction,
            onLabelSelection,
        } = this.props;

        const onlyChild = React.Children.only(children)
        const count = React.Children.count(onlyChild.props.children)

        return (
            <><div onChange={onAction} className="list-header">
                <select value={onLabelSelection} name="status">
                    <option value='all'>All</option>
                    <option value='stockin'>Stock In</option>
                    <option value='stockout'>Stock Out</option>
                </select>
            </div>
            {/* <InputLabl onInput={onInput}/> */}
                    {children}
            <div className="list-footer">
                Total {count} Mobiles Available
            </div></>
        )
    }
}

export default Tools;