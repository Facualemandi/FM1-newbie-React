import React from "react";
import "../styles/Email.css";

const Email = ({ verifyMail, onChangeMail, setOnChangeMail, valido, error}) => {

    const onChangeEmail = (e) => {
      setOnChangeMail({...onChangeMail, campo:e.target.value });
    }
   
     const isTrue = (text) => {
       if(valido === 'true'){
         return( text )
       }
     }
     const isFalse = (text) => {
       if(error === 'false'){
         return( text )
       }
     }
    

  return (
    <>
      <section className="email_container">
        <input
          type="email"
          placeholder="Enter Your Email"
          value={onChangeMail.campo}
          onChange={onChangeEmail}
        />
      
        <button onClick={verifyMail}> Notify Me </button>
      </section>
      <section>
      <p>{isTrue('hola')}</p>
      <p>{isFalse('hola por 2')}</p>
      </section>
    </>
  );
};

export default Email;
