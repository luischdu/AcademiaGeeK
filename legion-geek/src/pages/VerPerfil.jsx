import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const ImgStyled = styled.img`
position: absolute;
top: 38.5%;
left:5%;
border: solid 2px grey;
border-radius: 50%;

`
const ButtonStyle = styled.div`
margin: 2% 40%;
`
const DivConteiner = styled.div`
background-color: #071B2D;
color: white;
padding: 35px;
`


const VerPerfil = ({ handleLogout, userNameFromData, photoProfile }) => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center mt-4'>

        <div class="card" style={{ width: "38rem" }} >
          <img style={{ height: "12rem" }} className="figure-img rounded" src="https://wallpaperaccess.com/full/1249839.jpg" class="card-img-top" alt="..." />
          <DivConteiner class="card-body">
            <ImgStyled src={photoProfile} class="rounded" alt={`Foto de ${userNameFromData}`} />

            <h5 class="card-title">{userNameFromData}</h5>
            <p class="card-text">id : ubh12276</p>

          </DivConteiner>
        </div>


      </div>
      <div className='row justify-content-center'>
        <Link to='/login'>
          <ButtonStyle
            className="col-3 btn btn-xs  btn-outline-danger mt-3"
            onClick={handleLogout}
          >
            Cerrar sesion
          </ButtonStyle>
        </Link>
      </div>
    </div>
  );
};

export default VerPerfil;
