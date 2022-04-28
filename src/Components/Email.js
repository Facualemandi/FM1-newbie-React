import React from "react";
import "../styles/Email.css";

const Email = ({ verifyMail, onChangeMail, setOnChangeMail, valido, error}) => {

    const onChangeEmail = (e) => {
      setOnChangeMail({...onChangeMail, campo:e.target.value });
    }
   
     const validacionEmail = () => {
       if(valido === 'true'){
         return  <p className="valido">Email Correcto!</p>
       }if(valido === 'false'){
         return <p className="error">El email igresado no es valido.</p>
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
      <p>{validacionEmail()}</p>
      </section>
    </>
  );
};

export default Email;
