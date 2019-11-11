import React from "react";
import Image from "../assets/Screenshot.png";

const MovieCard = () => {
  return (
    <div className="movieCard">
      <img src={Image} alt="" />
      <div className="info">
        <h3>Ant-man</h3>
        <p>july 2016</p>
        <p>Description</p>
      </div>
    </div>
  );
};
export default MovieCard;
