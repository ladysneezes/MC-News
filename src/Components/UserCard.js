import React from "react";
import { Link } from "@reach/router";

const UserCard = props => {
  const { username, name, avatar_url, singleUser } = props.user;
  return singleUser ? (
    <div className="row">
      <div className="col s12 m10 offset-m1">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2 m2">
              <img
                src={avatar_url}
                alt="avatar"
                className="circle responsive-img"
              />
            </div>
            <div className="col s10">
              <p className="black-text">
                Username: {username}
                <br />
                Name: {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col s12 m10 offset-m1">
        <Link to={`/users/${username}`}>
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
              <div className="col s2 m2">
                <img
                  src={avatar_url}
                  alt="avatar"
                  className="circle responsive-img"
                />
              </div>
              <div className="col s6 m6">
                <p className="black-text">
                  Username: {username}
                  <br />
                  Name: {name}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
