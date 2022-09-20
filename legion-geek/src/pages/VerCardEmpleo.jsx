import React from "react";
import { Link } from "react-router-dom";

const VerCardEmpleo = ({ item }) => {
  return (
    <Link to={`/empleos/${item.id}`}>
      <div className="">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.img} className="img-thumbnail" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VerCardEmpleo;
