import React, { Component, PropTypes } from 'react';

import { Tooltip, Icon, Popconfirm } from 'antd';

import moment from 'moment';

import Textarea from '../Textarea/index.jsx';
import { markdown } from '../util';

import './index.less';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOperator: false,
      expandReply: false,
      disableSubmit: false,
    };
  }

  handleDelete() {
    const { data, onDelete } = this.props;
    onDelete && onDelete(data);
  }

  handleOnClickDelete() {
    this.setState({
      showOperator: true,
    });
  }

  handleOnCancelDelete() {
    this.setState({
      showOperator: false,
    });
  }

  handleOnSubmit(val) {
    console.log(val);
  }

  showReplyBox() {
    this.setState({
      expandReply: !this.state.expandReply,
    });
  }

  render() {
    const { showOperator, expandReply, disableSubmit } = this.state;
    const { data, currentUser } = this.props;
    let auth = data.auth;
    if (auth === undefined) {
      auth = (data.author.name === currentUser.name);
    }

    return <div className="antsay-comment">
      <div className="antsay-comment-author">
        <a href={data.author.link} target="_blank">
          <img src={data.author.avatar}/>
        </a>
      </div>
      <div className="antsay-comment-body">
        <div className="antsay-comment-meta">
          {
            data.replyAuthor && data.replyAuthor.name ?
              <p>
                <span>
                  {data.author.name}
                </span>
                <span>回复</span>
                <span>
                  {data.replyAuthor.name}
                </span>
              </p>
              :
              <span>
                {data.author.name}
              </span>
          }
          <Tooltip title={moment(new Date(data.createdAt)).format('YYYY/MM/DD hh:mm:ss')}>
            <span className="antsay-comment-meta-time">
              {moment(new Date(data.createdAt)).fromNow()}
            </span>
          </Tooltip>
        </div>
        <div
          className="antsay-comment-content antsay-markdown"
          dangerouslySetInnerHTML={{ __html: markdown(data.body || '') }}
        />
      </div>
      <div className="antsay-comment-operator-wrapper">
        <div className={showOperator ? 'antsay-comment-operator-show' : 'antsay-comment-operator'}>
          <span onClick={() => this.showReplyBox()}>
            <Icon type="rollback"/>
            { expandReply ? '取消回复' : '回复'}
          </span>
          {
            auth && !expandReply && <Popconfirm
              title="确定要删除这条评论吗？"
              onConfirm={() => this.handleDelete()}
              onCancel={() => this.handleOnCancelDelete()}
            >
              <span onClick={() => this.handleOnClickDelete()}>
                <Icon type="delete"/>删除
              </span>
            </Popconfirm>
          }
        </div>
      </div>
      <div className={expandReply ? 'antsay-comment-reply-show' : 'antsay-comment-reply'}>
        <Textarea
          active
          textSubmit="回复"
          placeholder={`回复 ${data.author.name} :`}
          disableSubmit={disableSubmit}
          onSubmit={val => this.handleOnSubmit(val)}
        />
      </div>
    </div>
  }
}

Comment.propTypes = {
  currentUser: PropTypes.object,
  data: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Comment;
