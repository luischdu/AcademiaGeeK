import axios from "axios";
import { useEffect, useState } from "react";

const useMovie = (pageNumber) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=ed4ef444cf09035de37c391527885e55&language=es&page=${pageNumber}`,
    }).then((res) => {
      console.log("res", res);
    });
  }, [ pageNumber]);

  return null;
};

export default useMovie;
