import React from 'react';

import '../css/story.css';
import Selector from './Selector';
import { getData } from '../api/newsapi';

class App extends React.Component {
    state = { articles: [] };

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
                    <Selector onSourceSelected={this.onSourceSelected}/>
                </div>
                
            </div>
        );
    };
}

export default App;