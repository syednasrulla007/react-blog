import React from 'react'

const LatestHolly = (props) => {
  return (
    <div className='latestbolly'>
    <img className='bollyimg' src={props.img} alt="" />
    <div>
      <h1 className='bollyhead'>{props.name}</h1>
      <p className='bollypara'>{props.para}</p>
    </div>
    
    </div>
  )
}

export default LatestHolly