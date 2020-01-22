import React, { Component } from 'react';
import { Table, message, Button } from 'antd';
import { Link } from 'react-router-dom';
import { getPosts } from '../../api';
import './index.less';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    let result = await getPosts();
    if (result.code === 0) {
      this.setState({
        posts: result.data,
      });
    } else {
      message.error(result.message);
    }
  }

  render() {
    const columns = [
      {
        title: '모든 포스팅 타이틀',
        dataIndex: 'title',
      },
    ];
    const { posts } = this.state;
    return (
      <div className="table">
        <div style={{ textAlign: 'right', marginBottom: 20 }}>
          <Link to="/">
            <Button type="primary">Home</Button>
          </Link>
        </div>
        {posts && (
          <Table
            rowKey="id"
            bordered
            dataSource={posts}
            columns={columns}
            pagination={{ pageSize: 10 }}
            onRow={record => {
              return {
                onClick: () => {
                  this.props.history.push(`/posts/${record.id}`, record);
                },
              };
            }}
          />
        )}
      </div>
    );
  }
}
