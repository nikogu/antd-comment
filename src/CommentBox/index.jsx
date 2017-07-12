import React, { Component, PropTypes } from 'react';

import { Input, Button } from 'antd';

import Textarea from '../Textarea';

import './index.less';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleOnSubmit() {
    const { onSubmit } = this.props;
    onSubmit && onSubmit(this.state.value);
  }

  render() {
    const { data, disableSubmit, id } = this.props;

    const { pagination={}, currentUser={} } = data;

    return <div className="antsay-commentbox">
      <div className="antsay-commentbox-header">
        <p>
          共 {data.pagination.total} 条评论
        </p>
      </div>
      <div className="antsay-commentbox-body">
        <div className="antsay-commentbox-user">
          <a href={data.currentUser.link} target="_blank">
            <img src={data.currentUser.avatar}/>
          </a>
        </div>
        <div className="antsay-commentbox-input-wrapper">
          <Textarea
            id={id}
            disableSubmit={disableSubmit}
            onSubmit={(val)=>this.handleOnSubmit(val)}
          />
        </div>
      </div>
    </div>
  }
}

CommentBox.propTypes = {};

export default CommentBox;
