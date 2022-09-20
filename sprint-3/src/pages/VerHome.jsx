import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const CardMovie = styled.button`
  position: relative;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
const BorderDiv = styled.div`
  position: absolute;
  left: 0;
  top: 3%;
`;

const RatingDiv = styled.div`
  position: absolute;
  top: 28%;
  left: 45%;
  color: #fff;
`;

const StarIcon = styled.div`
  position: absolute;
  top: 22%;
  left: 15%;
  font-size: 21px;
  color: #fed941;
`;

const VerHome = ({ handleClic, targetId, isLoading, list }) => {
  return (
    <div className="container">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title text-warning " id="exampleModalLabel">
                Infamous
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-2">
                <div className="col-md-3 text-white text-center">
                  {targetId != "" && (
                    <img
                      src={`https://image.tmdb.org/t/p/w185${targetId.poster_path}`}
                    />
                  )}
                </div>
                <div className="col-md-9 text-white">
                  Datos Pelicula
                  {targetId != "" && targetId.overview}
                </div>
              </div>
            </div>
            <div className="modal-footer border-top-0">
              <button className="btn btn-lg btn-warning">VER AHORA</button>
              <button className="btn btn-lg btn-outline-warning bg-dark">
                VER DESPUES
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-around mt-5 mb-5">
        {isLoading ? (
          <h1>Cargando.......</h1>
        ) : (
          list.map((movie) => (
            <div className="p-3" key={movie.id}>
              <CardMovie
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  id={movie.id}
                  onClick={handleClic}
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                />
                <BorderDiv>
                  <img src="https://i.imgur.com/GHZrOvx.png" />
                  <StarIcon>
                    <FontAwesomeIcon icon={faStar} />
                  </StarIcon>
                  <RatingDiv>
                    <h1 className="fs-4">{movie.vote_average}</h1>
                  </RatingDiv>
                </BorderDiv>
              </CardMovie>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VerHome;
