import React from "react";
import { db } from "../dbPruebas";
import VerCardCurso from "../pages/VerCardCurso";
import VerCursos from "../pages/VerCursos";

const Cursos = () => {
  return (
    <div className="container-md">
      <VerCursos />
      <div className="row justify-content-between">
    {/*     {db.map((item) => (
          <div className="col-md-4 mt-3 px-5">
            <VerCardCurso key={item.id} item={item} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Cursos;
