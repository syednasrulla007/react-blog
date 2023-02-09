import React from 'react'
import LatestFit from '../../Components/LatestFitness/LatestFit'
import './Fitness.css'
import { Data } from '../../Routes/RoutesFile'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Fitness = () => {
  const data=useContext(Data)
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Fitness</h1>
      <div className='fitnesscon'>
      <Link state={data.fitness.post1} to='/latesttravel'><LatestFit img={data.fitness.post1.img} name={data.fitness.post1.name} para={data.fitness.post1.para} /></Link>
        <Link state={data.fitness.post2} to='/latesttravel'><LatestFit img={data.fitness.post2.img} name={data.fitness.post2.name} para={data.fitness.post2.para} /></Link>
        <Link state={data.fitness.post3} to='/latesttravel'><LatestFit img={data.fitness.post3.img} name={data.fitness.post3.name} para={data.fitness.post3.para} /></Link>
    </div>
    </div>
  )
}

export default Fitness