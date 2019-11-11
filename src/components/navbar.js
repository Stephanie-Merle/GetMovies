import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Popular movies</li>
        <li className="selected">Upcoming movies</li>
        <li>Top Rated movies</li>
      </ul>
    </nav>
  );
};
export default Navbar;
