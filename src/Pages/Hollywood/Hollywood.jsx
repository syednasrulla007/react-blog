import React from 'react'
import LatestHolly from '../../Components/LatestHolly/LatestHolly'
import './Hollywood.css'
import { Link } from 'react-router-dom'
import { Data } from '../../Routes/RoutesFile'
import { useContext } from 'react'

const Hollywood = () => {
const data=useContext(Data)
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Movies</h1>
      <div className='hollywoodcon'>
     <Link state={data.hollywood.post1} to='/latesttravel'><LatestHolly img={data.hollywood.post1.img} name={data.hollywood.post1.name}  para={data.hollywood.post1.para} /></Link><br /><hr /><br />
        <Link state={data.hollywood.post2} to='/latesttravel'><LatestHolly img={data.hollywood.post2.img} name={data.hollywood.post1.name}  para={data.hollywood.post2.para} /></Link><br /><hr /><br />
        <Link state={data.hollywood.post3} to='/latesttravel'><LatestHolly img={data.hollywood.post3.img} name={data.hollywood.post1.name}  para={data.hollywood.post3.para} /></Link><br /><hr /><br />
    </div>
    </div>
  )
}

export default Hollywood