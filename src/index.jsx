import React, { Component, PropTypes } from 'react';

import shortid from 'shortid';

import CommentBox from './CommentBox/index';
import Comment from './Comment/index';

import './index.less';

class AntDComment extends Component {
  constructor(props) {
    super(props);

    this.id = shortid.generate();
    this.state = {
      disableSubmit: false,
    };
  }

  handleDelete(c) {
    const { onDelete } = this.props;
    if (onDelete) onDelete(c);
  }

  handleOnSubmit(val) {
    const { onComment } = this.props;

    this.setState({
      disableSubmit: true,
    });

    if (onComment) {
      onComment(val, null, () => {
        this.setState({
          disableSubmit: false,
        });
      });
    }
  }

  render() {
    const { disableSubmit } = this.state;

    const { data } = this.props;

    return (
      <div className="antsay-ui">

        <div className="antsay-top" />

        <div className="antsay-commentbox-wrapper">
          <CommentBox
            id={this.id}
            disableSubmit={disableSubmit}
            data={data}
            onSubmit={val => this.handleOnSubmit(val)}
          />
        </div>

        <div className="antsay-comments">
          {
            data.comments.map((comment, i) =>
              <Comment
                currentUser={data.currentUser}
                key={`comment-${i}`}
                data={comment}
                onDelete={c => this.handleDelete(c)}
              />
            )
          }
        </div>

        {
          data.more &&
          <div className="antsay-more">
            查看更多评论
          </div>
        }

      </div>
    )
  }
}

AntDComment.propTypes = {
  data: PropTypes.object,
  onComment: PropTypes.func,
  onDelete: PropTypes.func,
  onTop: PropTypes.func,
  onLike: PropTypes.func,
  onGetMore: PropTypes.func,
};

export default AntDComment;
