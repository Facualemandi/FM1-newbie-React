import React from 'react'
import ilustration from '../images/ilustration.png'
import '../styles/ilustration.css'

const Ilustration = () => {
  return (
     <>
       <section className='ilustration_container'>
            <img className='ilustration' src={ilustration} alt='ilustration'/>
       </section>
     </>
  )
}

export default Ilustration