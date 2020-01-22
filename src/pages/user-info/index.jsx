import React, { Component } from 'react';
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../api';

import './index.less';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  async componentDidMount() {
    const id = +this.props.match.params.id;
    const user = await getUserInfo(id);
    if (user.code === 0) {
      this.setState({
        user: user.data,
      });
    } else {
      message.error(user.message);
    }
  }

  render() {
    const id = +this.props.match.params.id;
    const { user } = this.state;
    return (
      <div className="user">
        <div className="right">
          <Button style={{ marginBottom: 10 }} type="primary">
            <Link to="/">Home</Link>
          </Button>
          <br />
          <Button type="primary" onClick={this.props.history.goBack}>
            뒤로가기
          </Button>
        </div>
        <div className="left">
          <Button className="left-btn" type="primary">
            <Link to={`/users/${id}`}>유저&nbsp;프로필</Link>
          </Button>
          <br />
          <Button className="left-btn" type="primary">
            <Link to={`/users/${id}/todos`}>투두</Link>
          </Button>
        </div>
        <div className="center">
          {user && (
            <div className="user-info">
              <img
                src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
                alt="이미지"
              ></img>
              <p>이름&nbsp;{user.name}</p>
              <p>이메일&nbsp;{user.email}</p>
              <p>모바일&nbsp;{user.phone}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
