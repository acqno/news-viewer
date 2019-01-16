import React from 'react';

import '../css/story.css';
import NewsCard from './NewsCard';

class NewsList extends React.Component {
    render() {
        return (
            <div className="card-list__container">
                <NewsCard/>
            </div>
        );
    };
}

export default NewsList;