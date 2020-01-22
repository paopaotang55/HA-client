import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './index.less';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>어플리케이션을 골라주세요</h2>
        <div className="home-bottom">
          <Link to="/users" className="link">
            <Button className="button" type="primary">
              투두
            </Button>
          </Link>
          <Link to="/posts" className="link">
            <Button className="button" type="primary">
              게시판
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
