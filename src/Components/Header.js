import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <header>
      <nav className="navButtons">
        <div className="nav-wrapper">
          <h6 className="right">User: {props.user}</h6>
          <ul id="nav-mobile" className="left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/articles">Add an Article</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
