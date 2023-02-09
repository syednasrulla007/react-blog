import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import './TravelClick.css'
import { Data } from '../CreateContext/contextdata'
import { Link } from 'react-router-dom'
import LatestFit from '../LatestFitness/LatestFit'


const TravelClick = () => {
  const location=useLocation()
  const data=useContext(Data)
  const img=location.state.img
  const name=location.state.name
  const imdb=location.state.para
  return (
    <div>
      <div className='singletravel'>
        <img className='singletrvelimg' src={img} alt="" />
        <h1 className='singletravelhead'>{name}</h1>
        <p className='singletravelpara'>{imdb}</p>
    </div>
    <h1 style={{textAlign:'center'}}>Fitness</h1>
      <div className='fitnesscon'>
      <Link state={data.fitness.post1} to='/latesttravel'><LatestFit img={data.fitness.post1.img} name={data.fitness.post1.name} para={data.fitness.post1.para} /></Link>
        <Link state={data.fitness.post2} to='/latesttravel'><LatestFit img={data.fitness.post2.img} name={data.fitness.post2.name} para={data.fitness.post2.para} /></Link>
        <Link state={data.fitness.post3} to='/latesttravel'><LatestFit img={data.fitness.post3.img} name={data.fitness.post3.name} para={data.fitness.post3.para} /></Link>
    </div>
    </div>
    
  )
}

export default TravelClick