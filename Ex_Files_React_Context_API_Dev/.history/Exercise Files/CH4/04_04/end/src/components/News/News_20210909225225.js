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
  }

  renderItems() {
    if (!this.state.error) {
      console.log(Consumer_Context_Theme);
      const get_temp_theme = () => {
        return (
          <Consumer_Context_Theme>console.log(styles);</Consumer_Context_Theme>
        );
      };

      console.log("get_temp_theme() return ", get_temp_theme());
      return this.state.news.map((item) => (
        <Consumer_Context_Theme>
          {({ styles }) => (
            <div style={styles}>
              <NewSingle key={item.url} item={item} />
            </div>
          )}
        </Consumer_Context_Theme>
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
