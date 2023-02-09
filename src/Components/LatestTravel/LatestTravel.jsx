import React from 'react'
import './travel.css'

const LatestTravel = (props) => {
  return (
    <div className='travel'>
      <img className='tarvelimg' src={props.img} alt="" />
      <h3>{props.heading}</h3>
      <p className='travelpara'>{props.para}</p>
    </div>
  )
}

export default LatestTravel