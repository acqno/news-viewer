// This is the NewsCard component
// it renders the details of each article into a simple card format

import React from "react";
import { Card, Row, Col } from "antd";

import "../css/story.css";

const NewsCard = props => {
  return (
    <div>
      <Card className="news-card">
        <h1>Title of article: {props.title}</h1>
        <Row gutter={16}>
          <Col className="gutter-row" span={3}>
            <h4>{this.props.source}</h4>
          </Col>
          <Col className="gutter-row" span={5}>
            <h4>{this.props.date}</h4>
          </Col>
        </Row>
        <p>{this.props.description}</p>
        <a href="#">link to article</a>
      </Card>
    </div>
  );
};

export default NewsCard;
