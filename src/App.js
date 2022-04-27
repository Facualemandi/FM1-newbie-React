import React, { useState } from "react";
import Creator from "./Components/Creator";
import Email from "./Components/Email";
import Ilustration from "./Components/Ilustration";
import Logo from "./Components/Logo";
import Redes from "./Components/Redes";
import Suscribe from "./Components/Suscribe";



const expresiones = {
 
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}


function App() {


   const [onChangeMail, setOnChangeMail] = useState({campo: '', valido: null})

  const verifyMail = () => {
   if(expresiones.correo){
      if(expresiones.correo.test(onChangeMail.campo)){
        setOnChangeMail({...onChangeMail, valido:'true'})
      }else{
        setOnChangeMail({...onChangeMail, valido:'false'})
      }
    }
  }

  return (
    <>
       <Logo/>
       <Suscribe/>
       <Email
         verifyMail={verifyMail}
         onChangeMail={onChangeMail}
         setOnChangeMail={setOnChangeMail}
         valido={onChangeMail.valido}
         error={onChangeMail.valido}
       />
       <Ilustration/>
       <Redes/>
       <Creator/>


    </>
  );
}

export default App;
