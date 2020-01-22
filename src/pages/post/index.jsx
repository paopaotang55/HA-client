import React, { Component } from 'react';
import { getComments } from '../../api';
import { message, Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.allComments = this.allComments.bind(this);
  }
  allComments() {
    const { comments } = this.state;
    return comments.map(item => {
      return (
        <div key={item.id}>
          <h3>{item.user.name}</h3>
          <p style={{ borderBottom: '1px solid black' }}>
            <span>컨텐츠:</span>
            {item.content}
          </p>
        </div>
      );
    });
  }

  async componentDidMount() {
    let post_id = +this.props.match.params.id;
    let result = await getComments(post_id);
    if (result.code === 0) {
      this.setState({
        comments: result.data,
      });
    } else {
      message.error(result.message);
    }
  }
  render() {
    const { comments } = this.state;
    const { title, content, user } = this.props.location.state;
    console.log(comments, this.props);
    return (
      <div className="post">
        <div style={{ textAlign: 'right', marginBottom: 20 }}>
          <Link to="/">
            <Button type="primary">Home</Button>
          </Link>
        </div>
        <div style={{ marginBottom: 40 }}>
          <h3>{user.name}</h3>
          <p>
            <span>타이틀:</span>
            {title}
          </p>
          <p style={{ borderBottom: '1px solid black' }}>
            <span>컨텐츠:</span>
            {content}
          </p>
        </div>
        <div>{comments && this.allComments()}</div>
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" onClick={this.props.history.goBack}>
            뒤로가기
          </Button>
        </div>
      </div>
    );
  }
}
