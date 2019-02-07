// This is the NewsCard component
// it renders the details of each article into a simple card format

import React from "react";
import { Card, Row, Col } from "antd";
import { Layout } from "antd";

import "../css/story.css";

class NewsCard extends React.Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;

    return (
      <div>
        <Card
          className="news-card"
          onClick={() => {
            window.open(this.props.link);
          }}
        >
          <Layout>
            <Sider className="sider-content">
              <div className="sider-image__container">
                <img src={this.props.image} />
              </div>
            </Sider>
            <Layout>
              <Content className="main-content">
                <h1>{this.props.title}</h1>
                <Row gutter={16}>
                  <Col className="gutter-row" span={5}>
                    <h4>{this.props.source}</h4>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <h4>{this.props.date}</h4>
                  </Col>
                </Row>
                <Row>
                  <p>{this.props.description}</p>
                </Row>
              </Content>
            </Layout>
          </Layout>
        </Card>
      </div>
    );
  }
}

export default NewsCard;
