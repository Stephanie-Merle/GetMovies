import React, { useState, useEffect } from "react";
import axios from "axios";
import "./reset.css";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import MovieCard from "./components/movie-card";
import Spinner from "./components/spinner";
import Pages from "./components/pages";

const App = () => {
  const [state, setState] = useState("popular");
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(true);
  let selected = state;

  let listing;
  const fetchData = async () => {
    let page = "?p=" + counter;
    let url = "https://api-allocine.herokuapp.com/api/movies/";
    const res = await axios.get(url + state + page);
    setMovies(res.data.results);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [state, counter]);
  listing = movies.map((el, index) => {
    const url = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/";
    return (
      <MovieCard
        key={index}
        title={el.original_title}
        cover={url + el.poster_path}
        date={el.release_date}
        synopsis={el.overview}
      />
    );
  });
  return (
    <>
      <Header />
      <Navbar
        selection={selected}
        popular={() => setState("popular")}
        upcoming={() => setState("upcoming")}
        top={() => setState("top_rated")}
      />
      <div className="container">{loading ? null : listing}</div>
      {loading ? (
        <Spinner />
      ) : (
        <Pages
          prev={() => setCounter(counter - 1)}
          next={() => setCounter(counter + 1)}
          count={counter}
        />
      )}
      ;
    </>
  );
};

export default App;
