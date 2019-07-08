import React, { Component } from "react";
import * as api from "../api";
import TopicCard from "./TopicCard";

class TopicsList extends Component {
  state = { topics: [] };
  render() {
    const { topics } = this.state;
    return (
      <>
        {topics.map(topic => (
          <TopicCard topic={topic} key={topic.slug} />
        ))}
      </>
    );
  }
  componentDidMount = () => {
    api.getTopics().then(res => {
      this.setState({ topics: res.topics });
    });
  };
}

export default TopicsList;
