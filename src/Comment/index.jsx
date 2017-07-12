import React, { Component, PropTypes } from 'react';

import { Input, Button, Tooltip, Icon } from 'antd';

import moment from 'moment';

import Textarea from '../Textarea';
import { markdown } from '../util';

import './index.less';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;

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
          dangerouslySetInnerHTML={{__html: markdown(data.body || '')}}
        />
      </div>
      <div className="antsay-comment-operator">
        <span>
          <Icon type="rollback"/>
          回复
        </span>
        <span>
          <Icon type="delete"/>
          删除
        </span>
      </div>
    </div>
  }
}

Comment.propTypes = {};

export default Comment;
