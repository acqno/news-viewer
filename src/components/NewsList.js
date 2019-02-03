// NewsList component
// This component will take the selected news source as a prop and use it to make an api request
// after some data is fetched, the articles are rendered from the data that will be passed as props
//

import React from "react";

import "../css/story.css";
import NewsCard from "./NewsCard";

class NewsList extends React.Component {
  state = { newsArticles: [] };

  componentDidMount() {
    this.setState({ newsArticles: this.props.articles });
  }

  // render method that will return the list of articles in card format

  renderArticles() {
    this.state.newsArticles.map(article => {
      console.log(article);
    });
  }

  render() {
    return <div className="card-list__container">{this.renderArticles}</div>;
  }
}

export default NewsList;
