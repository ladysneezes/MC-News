import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav className="navButtons">
          <div className="nav-wrapper">
            {/* <button className="right">User: {props.user}</button> */}
            {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"> */}
            {/* <i className="material-icons">menu</i>
            </a> */}
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
      {/* <ul className="sidenav" id="mobile-demo">
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
      </ul> */}
    </header>
  );
};

export default Header;
