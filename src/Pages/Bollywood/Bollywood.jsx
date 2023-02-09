import React,{useContext} from 'react'
import LatestBolly from '../../Components/LatestBollywood/LatestBolly'
import './Bollywood.css'
import { Data } from '../../Routes/RoutesFile'
import { Link } from 'react-router-dom'

const Bollywood = () => {
  const data=useContext(Data)
  return (
    <div className='container'>
      <div className='bollywoodcon'>
        <h2>Movies</h2>
     <Link state={data.bollywood.post1} to='/latesttravel'><LatestBolly img={data.bollywood.post1.img} name={data.bollywood.post1.name}  para={data.bollywood.post1.para} /></Link><br /><hr /><br />
        <Link state={data.bollywood.post2} to='/latesttravel'><LatestBolly img={data.bollywood.post2.img} name={data.bollywood.post1.name}  para={data.bollywood.post2.para} /></Link><br /><hr /><br />
        <Link state={data.bollywood.post3} to='/latesttravel'><LatestBolly img={data.bollywood.post3.img} name={data.bollywood.post1.name}  para={data.bollywood.post3.para} /></Link><br /><hr /><br />
    </div>
    
    <div className='bollywoodcon toppost'>
      <h2>Top Post</h2>
     <Link state={data.bollywood.post1} to='/latesttravel'><LatestBolly img={data.bollywood.post1.img} name={data.bollywood.post1.name}  para={data.bollywood.post1.para} /></Link><br /><hr /><br />
        <Link state={data.bollywood.post2} to='/latesttravel'><LatestBolly img={data.bollywood.post2.img} name={data.bollywood.post1.name}  para={data.bollywood.post2.para} /></Link><br /><hr /><br />
        <Link state={data.bollywood.post3} to='/latesttravel'><LatestBolly img={data.bollywood.post3.img} name={data.bollywood.post1.name}  para={data.bollywood.post3.para} /></Link><br /><hr /><br />
    </div>
    </div>
  )
}

export default Bollywood