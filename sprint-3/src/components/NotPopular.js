import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import VerPeliculas from "../pages/VerPeliculas";
import { movieListNotPopular, watchListLater } from "../action/movie";
import { setCredential } from "../action/trailer";

const NotPopular = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(441);
  const [element, setElement] = useState(null);

  const list = useSelector((state) => state.movie.npopular);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );

  const loadMoreMovies = () => {
    setPage(page - 1);
  };
  const loader = useRef(loadMoreMovies);

  useEffect(() => {
    loader.current = loadMoreMovies;
  }, [loadMoreMovies]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=ed4ef444cf09035de37c391527885e55&language=es&page=${page}`
      )
      .then(async ({ data }) => {
        await dispatch(movieListNotPopular([...list, ...data.results]));

        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page]);

  const dispatch = useDispatch();

  const [targetId, setTargetId] = useState("");

  const handleClic = (e) => {
    console.log(e.target.id);
    let content = list.find((dato) => dato.id == e.target.id);
    setTargetId(content);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${e.target.id}/videos?api_key=ed4ef444cf09035de37c391527885e55&language=en`
      )
      .then(async ({ data }) => {
        await dispatch(setCredential(data));

        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const keyVid = useSelector((state) => state.trailer.trailer);
  console.log(keyVid);

  const displayname = useSelector((state) => state.auth.name);

  const handleClicLater = () => {
    let datos = [
      {
        id: targetId.id,
        url: `https://image.tmdb.org/t/p/w185${targetId.poster_path}`,
        title: targetId.title,
        raiting: targetId.vote_average,
        trailer: `https://api.themoviedb.org/3/movie/${targetId}/videos?api_key=ed4ef444cf09035de37c391527885e55&language=en`,
      },
    ];
    dispatch(watchListLater(datos, displayname));
  };

  return (
    <div>
      {isLoading ? (
        <div className="row">
          <div className="col-12 text-center">
            <div class="spinner-border text-warning" role="status"></div>
          </div>
        </div>
      ) : (
        <VerPeliculas
          list={list}
          targetId={targetId}
          isLoading={isLoading}
          handleClic={handleClic}
          keyVid={keyVid}
          setElement={setElement}
          handleClicLater={handleClicLater}
        />
      )}
    </div>
  );
};

export default NotPopular;
