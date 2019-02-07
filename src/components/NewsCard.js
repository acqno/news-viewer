// This is the NewsCard component
// it renders the details of each article into a simple card format

import React from "react";
import { Card, Row, Col } from "antd";

import "../css/story.css";


const NewsCard = props => {

  return (
    <div>
      <Card className="news-card" onClick={() => {window.open(props.link)} }>
        <h1>{props.title}</h1>
        <Row gutter={16}>
          <Col className="gutter-row" span={5}>
            <h4>{props.source}</h4>
          </Col>
          <Col className="gutter-row" span={8}>
            <h4>{props.date}</h4>
          </Col>
        </Row>
        <p>{props.description}</p>
      </Card>
    </div>
  );
};

export default NewsCard;
