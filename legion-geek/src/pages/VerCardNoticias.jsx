import React from "react";
import { Link } from "react-router-dom";



const VerCardNoticias = ({ item }) => {
  return (
    <div className="container-md mt-3 ">
      <div className="card mb-3" >
        <div className="row g-0">
        <div className="col-md-4">
          <img className="img-fluid" src={item.img} className="card-img-top" alt="..." />
          </div>
          <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <Link to="/noticias" className="btn btn-primary">
            {item.id}
          </Link>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VerCardNoticias;
