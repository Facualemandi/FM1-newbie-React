import React from 'react'
import logo from '../images/logo.svg'
import '../styles/Logo.css'

const Logo = () => {
  return (
     <>
     <section className='section_logo'>
        <img className='logo' src={logo} alt='ping'/>
     </section>
     </>
  )
}

export default Logo