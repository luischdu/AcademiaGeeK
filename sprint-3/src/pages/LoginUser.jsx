/* import React from "react";
 import {
  ChakraProvider,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  Button,
} from "@chakra-ui/react"; 

const LoginUser = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('grey.100', 'grey.700')
  return (
    <ChakraProvider>
      <Flex height="100vh" alignItems="center" justifyContent="center" background='grey.100'>
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input
            placeholder="email@mail.com"
            variant="filled"
            type="email"
            mb={4}
          />
          <Input
            placeholder="contraseña"
            variant="filled"
            type="password"
            mb={6}
          />
          <Button mb={5} colorScheme="yellow">
            Login
          </Button>
          <Button onClick={toggleColorMode}>Color</Button>
        </Flex>
      </Flex>
    </ChakraProvider> 
  );
};

export default LoginUser;
 */

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
`;
const LoginUser = ({
  email,
  password,
  handleInputChange,
  handleLogin,
  handleGoogle,
  handleFacebook,
  loading,
}) => {
  return (
    <Main className="form-signin d-flex justify-content-center">
      <form className="text-center p-4" onSubmit={handleLogin}>
        <h1 className="h3 mb-3 fw-normal">Log in</h1>

        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Correo electronico</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-warning mt-2"
          type="submit"
          disabled={loading}
        >
          Iniciar sesión
        </button>
        <div
          className="w-100 btn btn-lg  btn-outline-warning mt-3"
          onClick={handleGoogle}
          disabled={loading}
        >
          <FontAwesomeIcon icon={faGoogle} /> Iniciar sesión con google
        </div>

        <div
          className="w-100 btn btn-lg  btn-outline-info mt-3"
          onClick={handleFacebook}
          disabled={loading}
        >
          <FontAwesomeIcon icon={faFacebook} /> Iniciar sesión con Facebook
        </div>

        <div className="checkbox  mt-3 mb-3">
          <Link to="/register">No tengo cuenta</Link>
        </div>
      </form>
    </Main>
  );
};

export default LoginUser;
