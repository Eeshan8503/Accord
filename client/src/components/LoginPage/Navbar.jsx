import React from 'react'
import Logo from './../../assets/Accord-logo.svg'
import './styles.css'
const Navbar = () => {
  return (
    <div className="navv" >
    <div className='image'>
        {/* <img src={Logo} height={50} width={300} alt='sa'></img> */}
        <p>Accord</p>
    </div>
    <div className='item1'>
        <p>Home</p>
        <p>About</p>
        <p>Contact us</p>
    </div>
    <div className='item2'>
        <p>Login</p>
        <p>Sign up</p>
    </div>
    </div>
  )
}

export default Navbar