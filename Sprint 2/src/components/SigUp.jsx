import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DivIconBack } from './styles/Style.jsx';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {
  FormImgStyle,
  InputStyle,
  ButtonStyle,
  DivContainer,
  H1Style,
  PFormStyle,
  SpanFormStyle,
} from './styles/Style.jsx';

const SigUp = (props) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { history } = props;
  let user = {
    userName: name,
    userLastname: lastname,
    userMail: email,
    pass: password,
  };

  const validar = (event) => {
    event.preventDefault();
    if (localStorage.getItem('users') === !null) {
      let usuarioslist = JSON.parse(localStorage.getItem('users'));
      usuarioslist.push(user);
      localStorage.setItem('users', JSON.stringify(usuarioslist));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Registro exitoso!`,
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/login');
    } else {
      console.log(localStorage.getItem('users'));
      localStorage.setItem('users', JSON.stringify([user]))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Registro exitoso!`,
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/login');
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
        <H1Style>Registro</H1Style>
        <InputStyle
          type="text"
          name="name"
          placeholder="Nombre"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputStyle
          type="text"
          name="lastname"
          placeholder="Apellido"
          required
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <InputStyle
          type="email"
          name="email"
          placeholder="somthing@email.com"
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
        <ButtonStyle type="submit">Registrarse</ButtonStyle>
        <PFormStyle>
          Si aun no estas registrado
          <SpanFormStyle onClick={() => history.push('/login')}>
            {' '}
            Ingresa Aquí
          </SpanFormStyle>
        </PFormStyle>
      </form>
    </DivContainer>
  );
};

export default withRouter(SigUp);
