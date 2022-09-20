import React, {useState} from "react";
import useFetch from "../hooks/useFetch";
import Api from "./Api";

const PracticaUseRef = () => {

    const [show, setShow] = useState(false)

  return (
    <div className='container d-flex flex-column'>
      <h1>Practica de Clase</h1>
      {
          !show && <Api />
      }
      
      <button className='btn btn-outline-danger' 
      onClick={()=>{setShow(!show)}}
      >
      Cambiar carga {JSON.stringify(show)}
      </button>

    </div>
  );
};

export default PracticaUseRef;
