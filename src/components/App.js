import React from 'react';

import '../css/story.css';
import Selector from './Selector';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Select News Source: </h1>
                <Selector />
            </div>
        );
    };
}

export default App;