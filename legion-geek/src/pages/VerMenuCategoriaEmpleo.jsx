import React from "react";

const VerMenuCategoriaEmpleo = () => {
  return (
    <div className="mt-3">
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Categorias
        </label>
        <select
          defaultValue={"DEFAULT"}
          className="form-select"
          id="inputGroupSelect01"
        >
          <option value="DEFAULT" selected>
            Todos...
          </option>
          <option value="1">Front End</option>
          <option value="2">Back End</option>
          <option value="3">Data base</option>
        </select>
      </div>
    </div>
  );
};

export default VerMenuCategoriaEmpleo;
