import axios from "axios";
import { useEffect, useState } from "react";

const useMovieSearch = (query, page) => {
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setisLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=ed4ef444cf09035de37c391527885e55&language=es&query=${query}&page=${page}&include_adult=false`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log("lista res: ", res.data);
        setList([res.data]);
        setHasMore(res.data.total_pages > 0);
        setisLoading(false);
        console.log("lista: ", list);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, page]);

  return { isLoading, error, list, hasMore };
};

export default useMovieSearch;
