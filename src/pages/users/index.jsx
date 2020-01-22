import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Radio, message } from 'antd';
import { getUsers } from '../../api';

import './index.less';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userId: 0,
    };
    this.selectUser = this.selectUser.bind(this);
    this.showUsers = this.showUsers.bind(this);
  }
  selectUser(e) {
    this.setState({
      userId: e.target.value,
    });
  }
  showUsers() {
    const { users } = this.state;
    return users.map(user => {
      return (
        <li key={user.id}>
          <Radio.Button style={{ padding: '0 70px' }} value={user.id}>
            {user.name}
          </Radio.Button>
        </li>
      );
    });
  }
  async componentDidMount() {
    const names = await getUsers();
    if (names.code === 0) {
      this.setState({
        users: names.data,
      });
    } else {
      message.error(names.message);
    }
  }

  render() {
    const { users, userId } = this.state;
    return (
      <div style={{ padding: '30px' }}>
        <div style={{ textAlign: 'right' }}>
          <Link className="lick-home" to="/">
            <Button type="primary">Home</Button>
          </Link>
        </div>
        <div className="users">
          <h3>유저&nbsp;&nbsp;리스트</h3>
          <Radio.Group
            className="content"
            buttonStyle="solid"
            onChange={this.selectUser}
          >
            {users && this.showUsers()}
          </Radio.Group>
          <div className="bottom">
            <Link className="btn" to={`/users/${userId}`}>
              <Button type="primary">선택</Button>
            </Link>
            <Button
              className="btn"
              type="primary"
              onClick={this.props.history.goBack}
            >
              뒤로가기
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
