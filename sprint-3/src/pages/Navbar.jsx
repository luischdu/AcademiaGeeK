import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'


const ImgStyle = styled.img`
width: 2.2em;
border-radius: 7px;
`

const Navbar = ({ isLoggedIn }) => {

  const userPhoto = useSelector((state) => state.auth.photoURL);
  
  return (
    <div className="">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ hover: "yellow" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/movies">
            <img
              src="https://i.imgur.com/F2ZlOa6.png"
              alt=""
              width="120"
              height="60"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/movies"
                >
                  Peliculas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/top-movies">
                  Mejores calificadas
                </Link>
              </li>
              <li className="nav-item dropdown"></li>
              <li className="nav-item">
                <Link className="nav-link active" to="/less-movies">
                  Menos calificadas
                </Link>
              </li>
              {isLoggedIn ? (
                <li className="nav-item active">
                  <Link
                    className="nav-link active"
                    to="/profile"
                    tabIndex="-1"
                    aria-disabled="true"

                  >

                    <ImgStyle src={userPhoto} class="rounded" alt="poto-perfil" sizes='10px' />

                  </Link>
                </li>
              ) : (
                <li className="nav-item active">
                  <Link
                    className="nav-link active"
                    to="/login"
                    tabIndex="-1"
                    aria-disabled="true"
                  >

                    <FontAwesomeIcon icon={faUserCircle} className="fs-4" />
                  </Link>
                </li>
              )}{" "}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
               
              />
              <Link to='/search'>
                <button className="btn btn-warning" type="submit">
                  Buscar
                </button>
              </Link>

            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
