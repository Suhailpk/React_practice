import React from 'react'

import HomePage from './HomePage'
import Usage from './Usage'

class MainPage extends React.Component{

  constructor (props){
    super(props)

    this.state = {
        pageDirection:'home'
    }
}

    onClickHandler = (evt)=>{
        console.log("clicked the header value and evt is --->", evt)
        const pageDir = evt
        if (pageDir === 'home'){
          this.setState({
            pageDirection:evt
          })
        }
        if (pageDir === 'usage'){
          this.setState({
            pageDirection:evt
          })
        }
        if (pageDir === 'google'){
          this.setState({
            pageDirection:evt
          })
        }
        if (pageDir === 'settings'){
          this.setState({
            pageDirection:evt
          })
        }
       
      }

    render(){
        if (this.state.pageDirection === 'home'){
          return(
            <HomePage onAction={this.onClickHandler}/>
          )
        }
        if (this.state.pageDirection === 'usage'){
          return(
            <Usage onAction={this.onClickHandler}/>
          )
        }
        if (this.state.pageDirection === 'google'){
          return(
            <HomePage onAction={this.onClickHandler}/>
          )
        }
        if (this.state.pageDirection === 'settings'){
          return(
            <HomePage onAction={this.onClickHandler}/>
          )
        }
       
    }
}

export default MainPage