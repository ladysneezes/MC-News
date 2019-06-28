import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <nav className="navButtons">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
