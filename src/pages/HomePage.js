import React from 'react'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import List from '../list/List'

const HomePage = (props) => {

    const{
        onAction
    } = props

  return (
    <><div className="my-app">
    <Header onAction={onAction}/>
  </div><div className='app-body'>
      <List />
    </div><div className="app-footer">
      <Footer />
    </div></>
  )
}

export default HomePage