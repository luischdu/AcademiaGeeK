import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { useFetch } from "../Hook/useFetch.jsx";

const BoardStyle = styled.div`
  z-index: 2;
  font-size: 2.75em;
  border-radius: 15px;
  margin: 50vh auto;
  width: 18em;
  padding: 2px;
`;

const ButtonStyle = styled.button`
  width: 10.6rem;
  height: 5.6rem;
  font-size: 1em;
  margin-top: 0.5em;
`;

const Board = () => {
  const [state] = useState("Q");

  const { data, loading } = useFetch(
    `https://api-drum-box.herokuapp.com/audio/${state}`
  );

  const { url } = !!data && data;

  const handleClick = (e) => {
    let button = document.getElementById(`Q`);
    if (button) {
      e.target.firstElementChild.play();
    }
  };

  document.addEventListener("keyup", handleClick);

  return (
    <Fragment>
      {" "}
      {loading ? (
        <div onLoad={() => loading} className="alert alert-info text-center">
          loading...
        </div>
      ) : (
        <BoardStyle className="container row row-cols-3 row-cols-lg-3 g-lg-3">
          <div className="col">
            <div className="text-center">
              <ButtonStyle
                className="btn btn-outline-primary width:auto;"
                onClick={handleClick}
                id="Q"
              >
                Q<audio src={url}></audio>
              </ButtonStyle>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <ButtonStyle
                className="btn btn-outline-primary"
                onClick={handleClick}
                id="W"
              >
                W<audio src={url}></audio>
              </ButtonStyle>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <ButtonStyle
                className="btn btn-outline-primary"
                onClick={handleClick}
                id="E"
              >
                E<audio src={url}></audio>
              </ButtonStyle>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <ButtonStyle
                className="btn btn-outline-primary"
                onClick={handleClick}
                id="A"
              >
                A<audio src={url}></audio>
              </ButtonStyle>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <ButtonStyle
                className="btn btn-outline-primary"
                onClick={handleClick}
                id="S"
              >
                S<audio src={url}></audio>
              </ButtonStyle>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <ButtonStyle
                className="btn btn-outline-primary"
                onClick={handleClick}
                id="D"
              >
                D<audio src={url}></audio>
              </ButtonStyle>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <ButtonStyle
                className="btn btn-outline-primary"
                onClick={handleClick}
                id="Z"
              >
                Z<audio src={url}></audio>
              </ButtonStyle>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <ButtonStyle
                className="btn btn-outline-primary"
                onClick={handleClick}
                id="X"
              >
                X<audio src={url}></audio>
              </ButtonStyle>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <ButtonStyle
                className="btn btn-outline-primary"
                onClick={handleClick}
                id="C"
              >
                C<audio src={url}></audio>
              </ButtonStyle>
            </div>
          </div>
        </BoardStyle>
      )}
    </Fragment>
  );
};

export default Board;
