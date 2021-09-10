import React, { Component } from "react";
import NewSingle from "./NewSingle";
import Error from "./Error";
import { Consumer_Context_Theme } from "../App";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=9602c64a7b074e36b8fd71fb104515a8`;

    // console.log("url = ", url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  } //end

  helper_renderItems() {

  }

  render() {
    return <div className="row">{this.helper_renderItems()}</div>;
  }
}

export default News;
