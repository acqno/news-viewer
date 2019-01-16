import React from 'react';
import { Card, Row, Col } from 'antd';

import '../css/story.css';

class NewsCard extends React.Component {
    render() {
        return (
            <div>
                <Card className="news-card">
                    <h1>Title of article</h1>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={3}>
                            <h4>Source</h4>
                        </Col>
                        <Col className="gutter-row" span={5}>
                            <h4>Published at 10-10-10</h4>
                        </Col>
                    </Row>
                    <p>description description description</p>
                    <a href='#'>link to article</a>
                </Card>
            </div>
        );
    };
}

export default NewsCard;