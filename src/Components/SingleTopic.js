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
    Promise.all([
      this.fetchTopic(this.props.topic),
      this.fetchArticlesByTopic(this.props.slug)
    ]).then(responses => {
      const singleTopic = responses[0].topics.find(
        eachTopic => eachTopic.slug === this.props.slug
      );
      this.setState({
        loading: false,
        topic: singleTopic,
        articles: responses[1].articles
      });
    });
  };

  fetchTopic = topic => {
    return api.getTopics().catch(error => {
      this.setState({ error });
    });
  };

  fetchArticlesByTopic = slug => {
    return api.getArticles({ slug }).catch(error => this.setState({ error }));
  };
}

export default SingleTopic;
