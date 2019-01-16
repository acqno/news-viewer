import React from 'react';

// local imports 
import '../css/story.css';
import Selector from './Selector';
import { getData } from '../api/newsapi';

class App extends React.Component {
    // states
    // articles - array of articles that is pulled from api request
    state = { articles: [] };

    // call back method that takes the selected news source and uses it to search for top results from api request
    onSourceSelected(newsValue) {

        console.log(newsValue);
        
        getData(newsValue);
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1 className="header-title">Newsbox</h1>
                    <h3>Never miss a single headline from your favourite news sources</h3>
                    <h4>Choose from a news source below: </h4>
                    <Selector onSourceSelected={this.onSourceSelected}/>
                </div>
                
            </div>
        );
    };
}

export default App;