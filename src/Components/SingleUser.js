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
    this.fetchUser(this.props.username);
    this.fetchArticlesByUsername(this.props.username);
    this.setState({ loading: false });
  };

  fetchUser = username => {
    return api
      .getUser(username)
      .then(res => {
        this.setState({ user: res.user });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  fetchArticlesByUsername = username => {
    api
      .getArticles({ username })
      .then(res => this.setState({ articles: res.articles }))
      .catch(error => this.setState({ error }));
  };
}

export default SingleUser;
