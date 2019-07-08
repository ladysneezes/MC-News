import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <header className="heading-bar">
      <div className="navbar-fixed">
        <nav className="navButtons">
          <div className="nav-wrapper">
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
      </div>
    </header>
  );
};

export default Header;
