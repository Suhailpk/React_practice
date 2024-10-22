import React from "react";
import Tools from "../componets/Tools";
import SimpleList from "./SimpleList";



const MyContext = React.createContext()

class List extends React.Component{

    constructor (props){
        super(props)

        this.state = {
            data:[],
            isActive: 'all',
            showLabel:true
        }
    }

    componentDidMount(){
        console.log("componetn did mount")
        fetch('/data.json')
            .then((data)=>{
                return data.json()
            })
            .then((data)=>{
                this.setState({
                    data:data
                })
            })
    }


    onDataFetch = () =>{
        
    }

    onClickChange = (evt) =>{
        console.log("Selection Changed")
        console.log(evt.target.value)
        const value = evt.target.value

        this.setState({
            isActive:value
        })

       
    }

    onDeleteHandler = (item) =>{
        console.log("Deleted", item)
        const newList = this.state.data.filter((element) => element.id !== item.id)
        this.setState({
            data:newList
        })


    }
    
    onLabelClickHandler = (arg) =>{
        this.setState({
            isActive:arg
        })
    }

    onInputHandler = (evt) =>{
        console.log(evt)
    }

    onShowLabelHandler = (evt) =>{
       this.setState({
        showLabel:evt.target.checked
       })
    }

    render(){

        const{
            data,
            isActive
        } = this.state

        const newList = data.filter((item)=>{
            if (isActive === "all"){
                return true
            }
            if (isActive === 'stockin'){
                return item.isStock === true
            }if (isActive === 'stockout'){
                return item.isStock === false
            }
            return false
        })

        console.log(newList)

        // this.setState({data:newList})

        return (
            <><input checked={this.state.showLabel}  onChange={this.onShowLabelHandler} type="checkbox"></input>Show Label
            <MyContext.Provider value={this.state.showLabel}>
                <Tools onInput={this.onInputHandler} onLabelSelection={this.state.isActive} onAction={this.onClickChange}>
                    <SimpleList onActionCheck={this.onLabelClickHandler} newList={newList} onAction={this.onDeleteHandler} />
                </Tools>
            </MyContext.Provider>
            </>
        );
                
    };
};



export default List;
export{
    MyContext
}