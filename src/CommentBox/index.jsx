import React, { Component, PropTypes } from 'react';

import { Input, Button } from 'antd';

import Textarea from '../Textarea/index';

import './index.less';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleOnSubmit(val) {
    const { onSubmit } = this.props;
    onSubmit && onSubmit(val);
  }

  render() {
    const { data, disableSubmit, id } = this.props;

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
            placeholder={(data.pagination && data.pagination.total === 0) && '添加第一条评论'}
            disableSubmit={disableSubmit}
            onSubmit={(val)=>this.handleOnSubmit(val)}
          />
        </div>
      </div>
    </div>
  }
}

CommentBox.propTypes = {
  id: PropTypes.any,
  disableSubmit: PropTypes.any,
  data: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default CommentBox;
