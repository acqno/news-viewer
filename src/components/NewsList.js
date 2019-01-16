import React from 'react';

import '../css/story.css';
import NewsCard from './NewsCard';

class NewsList extends React.Component {

    // TODO: pass an article object to each News card component so it each article has its own card

    render() {
        return (
            <div className="card-list__container">
                <NewsCard />
            </div>
        );
    };
}

export default NewsList;