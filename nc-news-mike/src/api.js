import axios from "axios";

export const getArticles = topic => {
  return axios
    .get("https://mikes-nc-news.herokuapp.com/api/articles/", {
      params: { topic: topic }
    })
    .then(res => {
      return res.data;
    });
};
export const getTopics = () => {
  return axios
    .get("https://mikes-nc-news.herokuapp.com/api/topics/")
    .then(res => {
      return res.data;
    });
};

export const getArticleById = article_id => {
  return axios
    .get(`https://mikes-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(res => {
      return res.data.article;
    });
};

export const getArticleComments = article_id => {
  return axios
    .get(
      `https://mikes-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(res => {
      return res.data.comments;
    });
};