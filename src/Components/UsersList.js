import React, { Component } from "react";
import UserCard from "./UserCard";
import * as api from "../api";
import Error from "./Error";

class UsersList extends Component {
  state = { users: [], error: null, loading: true };

  render() {
    const { users, loading, error } = this.state;

    if (error) return <Error error={error} />;

    return loading === true ? (
      <p>Loading...</p>
    ) : (
      <>
        {users.map(user => (
          <UserCard key={user.username} user={user} />
        ))}
      </>
    );
  }

  componentDidMount = () => {
    this.fetchUsers().then(() => {
      this.setState({ loading: false });
    });
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
