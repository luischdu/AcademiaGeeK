import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";

const VerCursos = () => {

  const uid = useSelector(state => state.auth.uid)
  const datos1 = {
    video: 'https://res.cloudinary.com/romajs/video/upload/v1623900975/Como_Instalar_una_Aplicacion_Movil_va9iex.mp4',
    descarga: 'https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623900975/Como_Instalar_una_Aplicacion_Movil_va9iex.mp4',
    description: 'Instala las aplicaciones que necesites sin ayuda de nadie.'
  }
  const datos2 = {
    video: 'https://res.cloudinary.com/romajs/video/upload/v1623903702/joined_video_4693ec08cb1848e5bdaebda1c114f6aa_jalaxb.mov',
    descarga: 'https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623903702/joined_video_4693ec08cb1848e5bdaebda1c114f6aa_jalaxb.mov',
    description: 'Envía correos como todo un genio! Es facil y muy util.'
  }
  const datos3 = {
    video: 'https://res.cloudinary.com/romajs/video/upload/v1623900953/C%C3%B3mo_hacer_un_derecho_de_peticion_j0vprv.mp4',
    descarga: 'https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623900953/C%C3%B3mo_hacer_un_derecho_de_peticion_j0vprv.mp4',
    description: 'Redacta facilmente un derecho de peticion por ti mismo en pocos minutos.'
  }
  const datos4 = {
    video: 'https://res.cloudinary.com/romajs/video/upload/v1623906161/Como_crear_un_correo_bpbddh.mov',
    descarga: 'https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623906161/Como_crear_un_correo_bpbddh.mov',
    description: 'Aprende a crear un correo, No te quedes sin el tuyo. ¡Crealo ahora mismo!'
  }

  const handleInputSave = async(data) => {
    if (data){
        await db.collection(`favoritos/users/${uid}`)
        .add(data)
        .then(res => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: '¡Se guardado con exito!',
                showConfirmButton: false,
                timer: 1500,
              });
        })
        .catch(res => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: '¡Lo sentimos hay problemas de conexion!',
                showConfirmButton: false,
                timer: 1500,
              });
        }) 
    }}

  const handleClick = (data) => {
    if (uid){
      handleInputSave(data)
    }else{
      Swal.fire({
        position: "center",
        icon: "info",
        title: '¡Por favor inicie sesion!, Así podras guardar tus noticias preferidas',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-start">Tutoriales</h1>
      <div className="d-flex flex-wrap ">

      <div className="col-xl-4 py-3">
          <div className="card" style={{ width: "23rem" }}>
            <video src="https://res.cloudinary.com/romajs/video/upload/v1623906161/Como_crear_un_correo_bpbddh.mov" controls />
            <div className="card-body">
              <h3 className="card-title text-end">
                <a href="https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623906161/Como_crear_un_correo_bpbddh.mov">
                  <FontAwesomeIcon style={{ color: "#153E90" }} icon={faArrowAltCircleDown} />
                </a>
                <FontAwesomeIcon type="button" onClick={()=> handleClick(datos4)} className="ms-2" style={{ color: "#FF5D6C" }} icon={faHeart} /></h3>
              <p className="card-text text-start">Aprende a crear un correo, No te quedes sin el tuyo. ¡Crealo ahora mismo!</p>
            </div>
            <div className="card-footer">
              <div className="row align-content-center">
                <div className="col-10">
                  <h6 className="card-title text-center pt-2" style={{ color: "black" }}> Siguenos en nuestras redes sociales!</h6>
                </div>
                <div className="col">
                  <a href="https://www.instagram.com/legiongeek/" target="_blank">
                    <FontAwesomeIcon className="fs-1" style={{ color: "#EF4F4F" }} icon={faInstagramSquare} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 py-3">
          <div className="card" style={{ width: "23rem" }}>
            <video src="https://res.cloudinary.com/romajs/video/upload/v1623900975/Como_Instalar_una_Aplicacion_Movil_va9iex.mp4" controls />
            <div className="card-body">
              <h3 className="card-title text-end">
                <a href="https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623900975/Como_Instalar_una_Aplicacion_Movil_va9iex.mp4">
                  <FontAwesomeIcon style={{ color: "#153E90" }} icon={faArrowAltCircleDown} />
                </a>
                <FontAwesomeIcon type="button" onClick={()=> handleClick(datos1)} className="ms-2" style={{ color: "#FF5D6C" }} icon={faHeart} /></h3>
              <p className="card-text text-start">Instala las aplicaciones que necesites sin ayuda de nadie.</p>
            </div>
            <div className="card-footer">
              <div className="row align-content-center">
                <div className="col-10">
                  <h6 className="card-title text-center pt-2" style={{ color: "black" }}> Siguenos en nuestras redes sociales!</h6>
                </div>
                <div className="col text-center">
                  <a href="https://www.instagram.com/legiongeek/" target="_blank">
                    <FontAwesomeIcon className="fs-1" style={{ color: "#EF4F4F" }} icon={faInstagramSquare} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 py-3">
          <div className="card" style={{ width: "23rem" }}>
            <video src="https://res.cloudinary.com/romajs/video/upload/v1623903702/joined_video_4693ec08cb1848e5bdaebda1c114f6aa_jalaxb.mov" controls />
            <div className="card-body">
              <div className="row"><h3 className="card-title text-end">
                <a href="https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623903702/joined_video_4693ec08cb1848e5bdaebda1c114f6aa_jalaxb.mov">
                  <FontAwesomeIcon style={{ color: "#153E90" }} icon={faArrowAltCircleDown} />
                </a>
                <FontAwesomeIcon type="button" onClick={()=> handleClick(datos2)} className="ms-2" style={{ color: "#FF5D6C" }} icon={faHeart} /></h3></div>
              <p className="card-text text-start">Envía correos como todo un genio! Es facil y muy util.</p>
            </div>
            <div className="card-footer">
              <div className="row align-content-center">
                <div className="col-10">
                  <h6 className="card-title text-center pt-2" style={{ color: "black" }}> Siguenos en nuestras redes sociales!</h6>
                </div>
                <div className="col">
                  <a href="https://www.instagram.com/legiongeek/" target="_blank">
                    <FontAwesomeIcon className="fs-1" style={{ color: "#EF4F4F" }} icon={faInstagramSquare} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 py-3">
          <div className="card " style={{ width: "23rem" }}>
            <video src="https://res.cloudinary.com/romajs/video/upload/v1623900953/C%C3%B3mo_hacer_un_derecho_de_peticion_j0vprv.mp4" controls />
            <div className="card-body">
              <h3 className="card-title text-end">
                <a href="https://res.cloudinary.com/romajs/video/upload/fl_attachment/v1623900953/C%C3%B3mo_hacer_un_derecho_de_peticion_j0vprv.mp4">
                  <FontAwesomeIcon style={{ color: "#153E90" }} icon={faArrowAltCircleDown} />
                </a>
                <FontAwesomeIcon type="button" onClick={()=> handleClick(datos3)} className="ms-2" style={{ color: "#FF5D6C" }} icon={faHeart} /></h3>
              <p className="card-text text-start">Redacta facilmente un derecho de peticion por ti mismo en pocos minutos.</p>
            </div>
            <div className="card-footer">
              <div className="row align-content-center">
                <div className="col-10">
                  <h6 className="card-title text-center pt-2" style={{ color: "black" }}> Siguenos en nuestras redes sociales!</h6>
                </div>
                <div className="col">
                  <a href="https://www.instagram.com/legiongeek/" target="_blank">
                    <FontAwesomeIcon className="fs-1" style={{ color: "#EF4F4F" }} icon={faInstagramSquare} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </div >
  );
};

export default VerCursos;
