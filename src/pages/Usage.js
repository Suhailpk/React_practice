import React,{useState} from 'react'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import './Usage.css'

const Usage = (props) => {

    const{
        onAction
    } = props

    const [value,setValue] = useState(0)
    const [color, setColor] = useState('white')

  return (
    <><div className="my-app">
    <Header onAction={onAction}/>
  </div><div className='app-body'>
      <h1>Usage page</h1>
      <div className='usage'>
        <div className='usage-item' style={{background:color}}>

            <button onClick={()=>{
                setValue((state)=>{
                    return state + 1
                })
            }}>Increment</button>
                <label>{value}</label>
            <button onClick={()=>{
                setValue(value - 1)
            }}>Decrement</button>

        </div>
            <button onClick={()=>{
                setColor('green')
            }}>Green</button>
            <button onClick={()=>{
                setColor('red')
            }}>Red</button>
      </div>
    </div><div className="app-footer">
      <Footer />
    </div></>
  )
}

export default Usage