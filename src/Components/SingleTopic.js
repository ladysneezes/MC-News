import React, { Component } from "react";
import Error from "./Error";
import TopicCard from "./TopicCard";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import { Router } from "@reach/router";
import ArticlesList from "./ArticlesList";

class SingleTopic extends Component {
  state = { articles: [], error: null, topic: {}, loading: true };
  render() {
    const { articles, topic, error, loading } = this.state;

    if (error) {
      return <Error error={error} />;
    }

    return loading === true ? (
      <p>Loading...</p>
    ) : (
      <>
        <TopicCard topic={topic} singleTopic={true} slug={topic.slug} />
        <ul>
          {articles.map(article => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>

        <Router>
          <ArticlesList path=":slug" topic={`${this.props.slug}`} />
        </Router>
      </>
    );
  }

  componentDidMount = () => {
    this.fetchTopic(this.props.topic);
    this.fetchArticlesByTopic(this.props.slug);
    this.setState({ loading: false });
  };

  fetchTopic = topic => {
    return api
      .getTopics()
      .then(res => {
        const singleTopic = res.topics.find(
          eachTopic => eachTopic.slug === this.props.slug
        );
        this.setState({ topic: singleTopic });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  fetchArticlesByTopic = slug => {
    api
      .getArticles({ slug })
      .then(res => this.setState({ articles: res.articles }))
      .catch(error => this.setState({ error }));
  };
}

export default SingleTopic;
