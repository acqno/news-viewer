import React from 'react';

import '../css/story.css';
import NewsCard from './NewsCard';

class NewsList extends React.Component {
    render() {
        return (
            <div>
                <NewsCard/>
            </div>
        );
    };
}

export default NewsList;