import React from "react";

const MovieCard = props => {
  return (
    <div className="movieCard">
      <img src={props.cover} alt="" />

      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.synopsis}</p>
      </div>
    </div>
  );
};
export default MovieCard;
