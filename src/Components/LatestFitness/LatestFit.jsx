import React from 'react'
import './LatestFit.css'

const LatestFit = (props) => {
  return (
    <div>
         <div className='fitcon'>
        <img className='fitimg' src={props.img} alt="" />
        <h3>{props.name}</h3>
        <p className='fitpara'>{props.para}</p>
    </div>
    </div>
  )
}

export default LatestFit