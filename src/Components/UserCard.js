import React from "react";

const UserCard = props => {
  const { username, name, avatar_url } = props.user;
  return (
    <>
      <p>
        Username: {username}
        <br />
        Name: {name}
        <br />
        <img src={avatar_url} alt={`${username}'s avatar`} />
      </p>
    </>
  );
};

export default UserCard;
