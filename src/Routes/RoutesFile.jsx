import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Bollywood from '../Pages/Bollywood/Bollywood'
import Fitness from '../Pages/Fitness/Fitness'
import Food from '../Pages/Food/Food'
import Hollywood from '../Pages/Hollywood/Hollywood'
import Home from '../Pages/Home/Home'
import Technology from '../Pages/Technology/Technology'
import TravelClick from '../Components/LatestTravel/TravelClick'
import { Data,data } from '../Components/CreateContext/contextdata'



const RoutesFile = () => {


  return (
    <div>
        <Data.Provider value={data}>
        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/bollywood' element={<Bollywood/>}>Bollywood</Route>
            <Route path='/technology' element={<Technology/>}>Technology</Route>
            <Route path='/hollywood' element={<Hollywood/>}>Hollywood</Route>
            <Route path='/fitness' element={<Fitness/>}>Fitness</Route>
            <Route path='/food' element={<Food/>}>Food</Route>
            <Route path='/latesttravel'element={<TravelClick/>}></Route>

        </Routes>
        </Data.Provider>
    </div>
  )
}

export {Data}
export default RoutesFile