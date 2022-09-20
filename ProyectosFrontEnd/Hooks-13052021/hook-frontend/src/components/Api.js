import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

const Api = () => {
  const { incremento, decremento, state } = useCounter();

  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/character/${state}`
  );

  const { name, species, image, gender, status } = !!data && data;

  return (
    <div className="container">
        {
    console.log(data)
  }
      {loading ? (
        <div onLoad={() => loading} className="alert alert-info text-center">
          loading...
        </div>
      ) : (
        <article className="container">
          <h1 className="text-center">The Rick and Morty API</h1>
          <div className="card-deck mb-3 text-center card bg-dark mt-4 rounded">
            <h2 className="card-title text-white"> {name} </h2>
            <img
              src={image}
              className="width: 18rem; rounded"
              alt="Personaje"
            />
            <h3 className="card-text text-white">Status: {status}</h3>
            <h3 className="card-text text-white">Species: {species}</h3>
            <h3 className="card-text text-white">Gender: {gender}</h3>
          </div>
          <div className="d-flex flex-row justify-content-evenly p-1">
            <button className="btn btn-success" onClick={() => incremento()}>
              Proximo personaje
            </button>
            <button className="btn btn-info" onClick={() => decremento()}>
              Personaje anterior
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default Api;
