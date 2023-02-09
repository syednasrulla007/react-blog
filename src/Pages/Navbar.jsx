import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navcon'>
     <div className='con2'> <span className='the'>The</span><span className='siren'>Siren</span> </div>
      <ul type='none'>
        <Link to='./'><li>Home</li></Link>
        <Link to='./bollywood'><li>Bollywood</li></Link>
        <Link to='./technology'><li>Technology</li></Link>
        <Link to='./hollywood'><li>Hollywood</li></Link>
        <Link to='./fitness'><li>Fitness</li></Link>
        <Link to='./food'><li>Food</li></Link>
      </ul>  
      <hr className='Navbarhr' />
    </div>
  )
}

export default Navbar