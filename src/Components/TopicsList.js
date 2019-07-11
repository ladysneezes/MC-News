import React, { Component } from "react";
import * as api from "../api";
import TopicCard from "./TopicCard";

class TopicsList extends Component {
  state = { topics: [], loading: true };
  render() {
    const { topics, loading } = this.state;

    return loading ? (
      <p>Loading...</p>
    ) : (
      <>
        {topics.map(topic => (
          <TopicCard topic={topic} key={topic.slug} />
        ))}
      </>
    );
  }
  componentDidMount = () => {
    api.getTopics().then(res => {
      this.setState({ topics: res.topics, loading: false });
    });
  };
}

export default TopicsList;
