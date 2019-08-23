import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav-list">
        <Link to="/items">
          <li>Items</li>
        </Link>
        <Link to="/weapons">
          <li>Weapons</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
