import React from 'react'
import './LatestFood.css'

const LatestFood = (props) => {
  return (
    <div className='foodcon'>
    <img className='foodimg' src={props.img} alt="" />
    <h3>{props.name}</h3>
    <p className='technopara'>{props.para}</p>
</div>
  )
}

export default LatestFood