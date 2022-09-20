import React from 'react'
import { Link } from "react-router-dom";


const VerSlider = () => {
    return (
        <div className="container-md">
        <div id="myCarousel" className="carousel slide mt-3" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.imgur.com/3iZc07Z.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <p>
                    <Link to="/" className="btn btn-lg btn-warning me-2" href="#">
                      <span>VER AHORA</span>{" "}
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-lg btn-outline-warning bg-dark"
                      href="#"
                    >
                      <span>VER DESPUES</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/RGyjnLe.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <p>
                    <Link to="/" className="btn btn-lg btn-warning me-2" href="#">
                      <span>VER AHORA</span>{" "}
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-lg btn-outline-warning bg-dark"
                      href="#"
                    >
                      <span>VER DESPUES</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/dB8qZ8J.png"
                className="d-block w-100"
                alt="..."
              />
  
              <div className="container">
                <div className="carousel-caption text-start">
                  <p>
                    <Link to="/" className="btn btn-lg btn-warning me-2" href="#">
                      <span>VER AHORA</span>{" "}
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-lg btn-outline-warning bg-dark"
                      href="#"
                    >
                      <span>VER DESPUES</span>{" "}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default VerSlider
