import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/items">
          <li>Items</li>
        </Link>
        <Link to="/weapons">
          <li>Weapons</li>
        </Link>
        <Link to="/userstats">
          <li>User Stats</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
