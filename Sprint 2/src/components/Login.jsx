import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DivIconBack } from './styles/Style.jsx';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import {
  FormImgStyle,
  InputStyle,
  ButtonStyle,
  DivContainer,
  H1Style,
  PFormStyle,
  SpanFormStyle,
} from './styles/Style.jsx';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { history } = props;

  const validar = (event) => {
    event.preventDefault();
    if (localStorage.getItem('users') === null) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Usuario no registrado`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const usuarios = JSON.parse(localStorage.getItem('users'));
      let usuario = usuarios.find((e) => e.userMail === email);
      if (usuario === undefined) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `Usuario no registrado`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        if (usuario.userMail === email && usuario.pass === password) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Bienvenido ${usuario.userName}`,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log('logeado');
          history.push('/');
        } else {
          console.log('no registrador');
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `Datos incorrectos`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <DivContainer>
      <DivIconBack>
        <FontAwesomeIcon
          onClick={() => history.goBack()}
          icon={faChevronLeft}
        />
      </DivIconBack>
      <form onSubmit={validar} action="">
        <FormImgStyle src="https://i.imgur.com/8aAwol7.png"></FormImgStyle>
        <br></br>
        <H1Style>Login</H1Style>
        <br></br>
        <InputStyle
          type="email"
          name="email"
          placeholder="Usuario"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputStyle
          type="password"
          name="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <ButtonStyle type="submit">Ingresar</ButtonStyle>
        <PFormStyle>
          Si aun no estas registrado
          <SpanFormStyle onClick={() => history.push('/signup')}>
            {' '}
            Registrate Aquí
          </SpanFormStyle>
        </PFormStyle>
      </form>
    </DivContainer>
  );
};

export default withRouter(Login);
