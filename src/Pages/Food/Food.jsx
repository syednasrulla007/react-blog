import React from 'react'
import LatestFood from '../../Components/LatestFood/LatestFood'
import { Data } from '../../Routes/RoutesFile'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const Food = () => {
  const data=useContext(Data)
  return (
    <div>
    <h1 style={{textAlign:'center'}}>Food</h1>
    <div className='fitnesscon'>
      <Link state={data.food.post1} to='/latesttravel'><LatestFood img={data.food.post1.img} name={data.food.post1.name} para={data.food.post1.para} /></Link>
        <Link state={data.food.post2} to='/latesttravel'><LatestFood img={data.food.post2.img} name={data.food.post2.name} para={data.food.post2.para} /></Link>
        <Link state={data.food.post3} to='/latesttravel'><LatestFood img={data.food.post3.img} name={data.food.post3.name} para={data.food.post3.para} /></Link>
    </div>
    </div>
  )
}

export default Food