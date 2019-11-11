import React from "react";

const Navbar = props => {
  return (
    <nav>
      <ul>
        <li className={props.selection === "popular" ? "selected" : null}>
          <button onClick={props.popular}>Popular movies</button>
        </li>
        <li className={props.selection === "upcoming" ? "selected" : null}>
          <button onClick={props.upcoming}>Upcoming movies</button>
        </li>
        <li className={props.selection === "top_rated" ? "selected" : null}>
          <button onClick={props.top}>Top rated movies</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
