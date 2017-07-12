import React, { Component, PropTypes } from 'react';

import shortid from 'shortid';

import CommentBox from './CommentBox';
import Comment from './Comment';

import './index.less';

class AntSay extends Component {
  constructor(props) {
    super(props);

    this.id = shortid.generate();
    this.state = {
      disableSubmit: false,
    }
  }

  handleOnSubmit(val) {
    this.setState({
      disableSubmit: true,
    });
    console.log(val);
    setTimeout(()=> {
      this.setState({
        disableSubmit: false,
      });
    }, 2000);
  }

  render() {

    const { disableSubmit } = this.state;

    const { data } = this.props;

    return <div className="antsay-ui">

      <div className="antsay-top"></div>

      <div className="antsay-commentbox-wrapper">
        <CommentBox
          id={this.id}
          disableSubmit={disableSubmit}
          data={data}
          onSubmit={(val)=>this.handleOnSubmit(val)}
        />
      </div>

      <div className="antsay-comments">
        {
          data.comments.map((comment, i)=>
            <Comment key={`comment-${i}`} data={comment} />
          )
        }
      </div>

    </div>
  }
}

AntSay.propTypes = {
  data: PropTypes.object,
  onComment: PropTypes.func,
  onDeleteComment: PropTypes.func,
  onTop: PropTypes.func,
  onLike: PropTypes.func,
  onGetMore: PropTypes.func,
};

export default AntSay;
