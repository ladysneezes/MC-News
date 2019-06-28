import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <header>
      <nav className="navButtons">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/users">Users</Link>
        <p>Logged in as: {props.user}</p>
      </nav>
    </header>
  );
};

export default Header;
