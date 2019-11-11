import React from "react";
import Layout from "./components/layout";
import "./reset.css";
import "./App.css";
import MovieCard from "./components/movie-card";

const App = () => {
  return (
    <Layout>
      <div className="container">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </Layout>
  );
};

export default App;
