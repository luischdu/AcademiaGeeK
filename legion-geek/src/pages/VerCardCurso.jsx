import React from "react";
import { Link } from "react-router-dom";

const VerCardCurso = ({ item }) => {
  return (
    <div >
      <Link to={`/cursos/${item.id}`}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={item.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VerCardCurso;
