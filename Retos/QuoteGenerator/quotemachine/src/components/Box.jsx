import React, { useState } from "react";
import styled from "styled-components";
import { useFetch } from "../Hooks/useFetch.jsx";
import Colores from "../Styled/Colores.jsx";

const color = Colores;

const MainStyled = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${color};
`;

const BoxStyled = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  z-index: 4;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin: 8% auto;
  width: 50vw;
  padding: 40px 50px;
  background-color: white;
`;

const PCitaStyled = styled.p`
  color: ${color};
  font-size: 200%;
  @media (max-width: 450px) {
    font-size: 100%;
  }
`;

const PAutorStyled = styled.p`
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1.3vw;
  font-style: italic;
  text-align: right;
  color: ${color};
`;

const DivButStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonStyled = styled.button`
  width: 12vw;
  height: 3vw;
  border-radius: 15px;
  background-color: ${color};
  border: none;
  color: #fff;
  font-size: 1.2vw;
  :hover {
    background-color: #fff;
    color:black;
    border: solid 2px white;
  }
`;

const PStyled = styled.p`
  width: 450px;
  text-align: center;
  margin: 10px auto;
  font-size: 0.8em;
  color: #fff;
`;

const AStyled = styled.a`
  font-weight: 500;
  font-size: 1em;
  text-decoration: none;
  color: #fff;
  :hover {
    color: blue;
  }
`;

const Box = () => {
  const [state, setState] = useState(1);
  const incremento = () => {
    setState(Math.floor(Math.random() * 102));
  };

  const { data, loading } = useFetch(
    `https://api-quote-machine.herokuapp.com/citas/${state}`
  );
  const { cita, autor, color } = !!data && data;

  return (
    <MainStyled style={{ background: `${color}` }}>
      {loading ? (
        <div onLoad={() => loading} className="alert alert-info text-center">
          loading...
        </div>
      ) : (
        <div>
          <BoxStyled>
            <PCitaStyled style={{ color: `${color}` }}>
              <i className="fas fa-quote-left"> </i>
              <span> </span>
              {cita}
              <span> </span>
              <i className="fas fa-quote-right"></i>
            </PCitaStyled>
            <PAutorStyled id="author" style={{ color: `${color}` }}>
              {" "}
              - {autor}
            </PAutorStyled>
            <DivButStyled className="interaccion-container">
              <div
                style={{ color: `${color}` }}
                href={`https://twitter.com/intent/tweet/?text="${cita}" -${autor}&hashtags=citaDeldía`}
                target="_blanck"
              >
                <i className="fab fa-twitter-square"></i>
              </div>
              <ButtonStyled
                id="new-quote"
                style={{ background: `${color}` }}
                onClick={() => incremento()}
              >
                Nueva cita
              </ButtonStyled>
            </DivButStyled>
          </BoxStyled>
          <PStyled>
            by <AStyled href="https://github.com/luischdu">luischdu</AStyled>
          </PStyled>
        </div>
      )}
    </MainStyled>
  );
};

export default Box;
