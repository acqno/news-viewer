import React from "react";

// local imports
import "../css/story.css";
import Selector from "./Selector";
import { KEY } from "../api/newsapi";
import NewsList from "./NewsList";
class App extends React.Component {
  // states
  // articles - array of articles that is pulled from api request
  state = { news: [] };

  // call back method that takes the selected news source and uses it to search for top results from api request
  onSourceSelected = async newsValue => {
    await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${newsValue}&apiKey=${KEY}`
    )
      .then(response => response.json())
      .then(result => {

        this.setState({ news: result.articles });
        //console.log(this.state.news);
      })
      .catch(error => console.log("parsing failed", error));
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="header-title">Newsbox</h1>
          <h3>Never miss a single headline from your favourite news sources</h3>
          <h4>Choose from a news source below: </h4>
          <Selector onSourceSelected={this.onSourceSelected} />
        </div>

        <div className="content">
          <NewsList articles={this.state.news} />
        </div>
      </div>
    );
  }
}

export default App;
