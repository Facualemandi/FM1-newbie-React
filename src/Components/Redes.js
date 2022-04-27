import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../styles/Redes.css'


const Redes = () => {
  return (
      <>
       <section className='redes'>
          <span> <FontAwesomeIcon icon={faFacebook}/> </span>
          <span>  <FontAwesomeIcon icon={faTwitter}/> </span>
          <span> <FontAwesomeIcon icon={faInstagram}/> </span>
       </section>
      </>
  )
}

export default Redes