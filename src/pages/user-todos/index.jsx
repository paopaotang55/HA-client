import React, { Component } from 'react';
import { Button, message, Select, List } from 'antd';
import { Link } from 'react-router-dom';
import { getUserTodos } from '../../api';

import './index.less';
const Option = Select.Option;

export default class UserTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: [],
      todos: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    const { allTodos } = this.state;
    let result = allTodos;
    if (+value === 1) {
      result = allTodos.filter(todo => {
        return todo.completed === true;
      });
    } else if (+value === 2) {
      result = allTodos.filter(todo => {
        return todo.completed === false;
      });
    }
    this.setState({
      todos: result,
    });
  }

  async componentDidMount() {
    const user_id = +this.props.match.params.id;
    const todos = await getUserTodos(user_id);
    if (todos.code === 0) {
      this.setState({
        allTodos: todos.data,
        todos: todos.data,
      });
    } else {
      message.error(todos.message);
    }
  }

  render() {
    const id = +this.props.match.params.id;
    const data = this.state.todos.map(item => item.title);
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
          <Button type="primary" className="left-btn">
            <Link to={`/users/${id}`}>유저&nbsp;프로필</Link>
          </Button>
          <br />
          <Button type="primary" className="left-btn">
            <Link to={`/users/${id}/todos`}>투두</Link>
          </Button>
        </div>
        <div className="center">
          <div>
            <Select
              defaultValue="0"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="0">모든 투두</Option>
              <Option value="1">완료한 투두</Option>
              <Option value="2">미완료한 투두</Option>
            </Select>
          </div>
          {data && (
            <List
              size="small"
              bordered
              style={{ marginRight: 300 }}
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          )}
        </div>
      </div>
    );
  }
}
