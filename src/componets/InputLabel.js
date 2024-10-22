import React from "react";

class InputLabl extends React.Component{
    render(){

        const{
            onInput
        } = this.props
        return(
            <><div className="input-section">
                <input></input>
            </div><div className="input-button">
            onInput
                    <button onChange={onInput}>Cick</button>
                </div></>
        )
    }
}

export default InputLabl