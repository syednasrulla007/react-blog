import React from 'react'
import './LatestTechno.css'

const LatestTechno = (props) => {
  return (
    <div className='technocon'>
        <img className='technoimg' src={props.img} alt="" />
        <h3>{props.name}</h3>
        <p className='technopara'>{props.para}</p>
    </div>
  )
}

export default LatestTechno