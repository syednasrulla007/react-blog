import React from 'react'
import LatestTechno from '../../Components/LatestTechno/LatestTechno'
import './Technology.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Data } from '../../Routes/RoutesFile'

const Technology = () => {
  const data=useContext(Data)
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Technology</h1>
      <div className='technologycon'>
        <Link state={data.technology.post1} to='/latesttravel'><LatestTechno img={data.technology.post1.img} name={data.technology.post1.name} para={data.technology.post1.para} /></Link>
        <Link state={data.technology.post2} to='/latesttravel'><LatestTechno img={data.technology.post2.img} name={data.technology.post2.name} para={data.technology.post2.para} /></Link>
        <Link state={data.technology.post3} to='/latesttravel'><LatestTechno img={data.technology.post3.img} name={data.technology.post3.name} para={data.technology.post3.para} /></Link>
    </div>
    </div>
  )
}

export default Technology