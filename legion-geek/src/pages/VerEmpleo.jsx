import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const VerEmpleo = () => {
  return (
    <div className="">
      <div>
        <div>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="" className="img-thumbnail" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Nombre empresa</h5>
                  <p className="card-text">Ubicaion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>Descripcion empleo</h2>
        <button className="p-2 btn btn-outline-secondary" type="submit">
          <FontAwesomeIcon icon={faBookmark} />
        </button>
        <hr></hr>
        <p>5 años de experiencia</p>
        <p>Info de la empresa</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          sequi fugit voluptate, architecto aperiam at voluptas ad tempora,
          incidunt magni eius molestias! Maiores praesentium ipsa quisquam rem
          molestiae, doloremque esse! Temporibus aut explicabo dignissimos nihil
          tempore voluptatum esse beatae aspernatur fuga sed eaque deserunt
          sapiente provident, enim corrupti a accusamus.
        </p>
        <ul>
          <li>Desarollo de sofwate</li>
          <li>Desarollo de vida</li>
          <li>Tener una vida</li>
        </ul>
        <p>Informacion del Empleo:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad dolorem
          atque veritatis delectus amet quia beatae culpa inventore? Perferendis
          alias quae laboriosam quo unde odio maxime accusamus officiis nisi!
          Quis obcaecati nobis magni aut exercitationem? Laudantium, totam
          culpa. Obcaecati totam quo quas nesciunt perferendis consequuntur non
          nemo repudiandae quam! Perspiciatis.
        </p>
        <p>Tipo de jornada</p>
        <p>Jornada completa</p>
      </div>
      <div className="d-grid g-2">
        <button className="p-2 btn btn-primary" type="submit">
          Contactar
        </button>
        <button className="p-2 btn btn-primary" type="submit">
          <FontAwesomeIcon icon={faBookmark} />
        </button>
      </div>
    </div>
  );
};

export default VerEmpleo;
