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
                <h1>Select News Source: </h1>
                <Selector onSourceSelected={this.onSourceSelected}/>
            </div>
        );
    };
}

export default App;