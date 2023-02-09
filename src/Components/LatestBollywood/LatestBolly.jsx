import React from 'react'
import './LatestBolly.css'


const LatestBolly = (props) => {
// console.log(props)
  return (
    <div className='latestbolly'>
    <img className='bollyimg' src={props.img} alt="" />
    <div className='bollyhead' >
      <h1>{props.name}</h1>
      <p className='bollypara'>{props.para}</p>
    </div>
    
    </div>
    
  )
}

export default LatestBolly