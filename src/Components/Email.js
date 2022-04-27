import React from 'react'
import '../styles/Email.css'


const Email = ({verifyMail}) => {



  return (
     <>
       <section className='email_container'>
           <input type='email' placeholder='Enter Your Email' />
           <button onClick={verifyMail}> Notify Me  </button>
       </section>
     </>
  )
}

export default Email