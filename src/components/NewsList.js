// NewsList component
// This component will take the selected news source as a prop and use it to make an api request
// after some data is fetched, the articles are rendered from the data that will be passed as props
//

import React from "react";

import "../css/story.css";
import NewsCard from "./NewsCard";

class NewsList extends React.Component {
  
  // render method that takes the array of articles passed from App and passes the data into NewsCard component to be rendered in a list
  // renderList() {
  //   this.props.articles.map(article => {
  //     console.log(article);
  //     return article;
  //   })
  // }

  render() {
    return (
    <div className="card-list__container">
      {this.props.articles.map(article => {
        console.log(article);
        return(
          <NewsCard 
            key={article.source.id}
            title={article.title}
            source={article.source.name}
            date={article.publishedAt}
            description={article.description}
          />
        )
      })}
    </div>);
  }
}

export default NewsList;
