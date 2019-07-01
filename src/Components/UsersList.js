import React, { Component } from "react";
import UserCard from "./UserCard";
import * as api from "../api";

class UsersList extends Component {
  state = { users: [], error: null };

  render() {
    const { users } = this.state;
    return (
      <>
        {users.map(user => (
          <UserCard key={user.username} user={user} />
        ))}
      </>
    );
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = () => {
    return api
      .getUsers()
      .then(res => {
        this.setState({ users: res.users });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
}

export default UsersList;
