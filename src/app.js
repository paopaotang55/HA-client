import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Users from './pages/users';
import UserInfo from './pages/user-info';
import UserTodos from './pages/user-todos';
import Posts from './pages/posts';
import Post from './pages/post';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={UserInfo} />
          <Route path="/users/:id/todos" component={UserTodos} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id" component={Post} />
        </Switch>
      </Router>
    );
  }
}
