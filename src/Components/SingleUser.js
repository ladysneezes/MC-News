import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import UserCard from "./UserCard";
import Error from "./Error";

class SingleUser extends Component {
  state = { articles: [], error: null, user: {}, loading: true };
  render() {
    const { articles, user, error, loading } = this.state;

    if (error) {
      return <Error error={error} />;
    }

    return loading === true ? (
      <p>Loading...</p>
    ) : (
      <>
        <UserCard user={user} singleUser={true} />
        <ul>
          {articles.map(article => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>
      </>
    );
  }

  componentDidMount = () => {
    Promise.all([
      this.fetchUser(this.props.username),
      this.fetchArticlesByUsername(this.props.username)
    ]).then(responses => {
      return this.setState({
        loading: false,
        user: responses[0].user,
        articles: responses[1].articles
      });
    });
  };

  fetchUser = username => {
    return api.getUser(username).catch(error => {
      this.setState({ error });
    });
  };

  fetchArticlesByUsername = username => {
    return api
      .getArticles({ username: username })
      .catch(error => this.setState({ error }));
  };
}

export default SingleUser;
