import React, { useContext } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import LatestTravel from '../../Components/LatestTravel/LatestTravel'
import { Link } from 'react-router-dom'
import LatestBolly from '../../Components/LatestBollywood/LatestBolly'
import LatestTechno from '../../Components/LatestTechno/LatestTechno'
import LatestHolly from '../../Components/LatestHolly/LatestHolly'
import LatestFit from '../../Components/LatestFitness/LatestFit'
import LatestFood from '../../Components/LatestFood/LatestFood'
import { Data } from '../../Routes/RoutesFile'

const Home = () => {
  const data=useContext(Data)
  // console.log(data.bollywood.post1.img)
  
  return (
    <div className='home'>
      <Header/>
      <br />
      <h1>Latest Travel<hr style={{border:'2px solid brown'}} /> </h1>
      <div className='latesttravel'>
        <Link state={data.travel.post1} to='/latesttravel'> 
        <LatestTravel img={data.travel.post1.img} heading={data.travel.post1.name} para={data.travel.post1.para}/>
        </Link>

        <Link state={data.travel.post2} to='/latesttravel'>
        <LatestTravel img={data.travel.post2.img} heading={data.travel.post2.name} para={data.travel.post2.para}/>
        </Link>

        <Link state={data.travel.post3} to='/latesttravel'>
        <LatestTravel img={data.travel.post3.img} heading={data.travel.post3.name} para={data.travel.post3.para}/>
        </Link>
      </div>
      <br />
      <h2>Latest Bollywood Stories <hr style={{border:'2px solid brown'}} /></h2>
      <div className='homebolly'>
        <div className='box box1'>
        <Link state={data.bollywood.post1} to='/latesttravel'><LatestBolly img={data.bollywood.post1.img} name={data.bollywood.post1.name}  para={data.bollywood.post1.para} /></Link>
        <Link state={data.bollywood.post2} to='/latesttravel'><LatestBolly img={data.bollywood.post2.img} name={data.bollywood.post2.name}  para={data.bollywood.post2.para} /></Link>
        <Link state={data.bollywood.post3} to='/latesttravel'><LatestBolly img={data.bollywood.post3.img} name={data.bollywood.post3.name}  para={data.bollywood.post3.para} /></Link>
      
        </div>
        <div className='box box2'>Advertisement</div>
      </div>
      <br />
      <h2>Latest Technology <hr style={{border:'2px solid brown'}} /></h2>
      <div className='hometechno'>
        <Link state={data.technology.post1} to='/latesttravel'><LatestTechno img={data.technology.post1.img} name={data.technology.post1.name} para={data.technology.post1.para} /></Link>
        <Link state={data.technology.post2} to='/latesttravel'><LatestTechno img={data.technology.post2.img} name={data.technology.post2.name} para={data.technology.post2.para} /></Link>
        <Link state={data.technology.post3} to='/latesttravel'><LatestTechno img={data.technology.post3.img} name={data.technology.post3.name} para={data.technology.post3.para} /></Link>
      </div>
      <br />
      <h2>Latest Hollywood Stories <hr style={{border:'2px solid brown'}} /></h2>
      <div className='homebolly'>
        <div className='box box1'>
        <Link state={data.hollywood.post1} to='/latesttravel'><LatestHolly img={data.hollywood.post1.img} name={data.hollywood.post1.name}  para={data.hollywood.post1.para} /></Link><br /><hr /><br />
        <Link state={data.hollywood.post2} to='/latesttravel'><LatestHolly img={data.hollywood.post2.img} name={data.hollywood.post2.name}  para={data.hollywood.post2.para} /></Link><br /><hr /><br />
        <Link state={data.hollywood.post3} to='/latesttravel'><LatestHolly img={data.hollywood.post3.img} name={data.hollywood.post3.name}  para={data.hollywood.post3.para} /></Link><br /><hr /><br />
        </div>
        <div className='box box2'>Advertisement</div>
      </div>
      <br />
      <h2>Physical Fitness <hr style={{border:'2px solid brown'}} /></h2>
      <div className='hometechno'>
      <Link state={data.fitness.post1} to='/latesttravel'><LatestFit img={data.fitness.post1.img} name={data.fitness.post1.name} para={data.fitness.post1.para} /></Link>
        <Link state={data.fitness.post2} to='/latesttravel'><LatestFit img={data.fitness.post2.img} name={data.fitness.post2.name} para={data.fitness.post2.para} /></Link>
        <Link state={data.fitness.post3} to='/latesttravel'><LatestFit img={data.fitness.post3.img} name={data.fitness.post3.name} para={data.fitness.post3.para} /></Link>
      </div>
      <br />
      <h2>Latest Food <hr style={{border:'2px solid brown'}} /></h2>
      <div className='hometechno'>
      <Link state={data.food.post1} to='/latesttravel'><LatestFood img={data.food.post1.img} name={data.food.post1.name} para={data.food.post1.para} /></Link>
        <Link state={data.food.post2} to='/latesttravel'><LatestFood img={data.food.post2.img} name={data.food.post2.name} para={data.food.post2.para} /></Link>
        <Link state={data.food.post3} to='/latesttravel'><LatestFood img={data.food.post3.img} name={data.food.post3.name} para={data.food.post3.para} /></Link>
      </div>
      <br /><br />
      
    </div>
  )
}

export default Home