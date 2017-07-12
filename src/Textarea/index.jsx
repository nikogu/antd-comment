import React, { Component, PropTypes } from 'react';

import { Input, Button } from 'antd';

import autosize from 'autosize';
import { markdown } from '../util';

import './highlight.css';
import './index.less';

// markdown support code highlight

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: false,
      active: false,
      value: '',
    }
  }

  componentDidMount() {
    const { id } = this.props;

    // autosize
    autosize(document.getElementById(`antsay-commentbox-${id}`));

  }

  handleOnChange(e) {
    const value = e.target.value;
    this.setState({
      value,
    });
  }

  handleOnFocus() {
    this.setState({
      active: true,
    });
  }

  handleOnBlur(e) {
    const id = this.props.id;
    const value = e.target.value;
    if (!value) {
      document.getElementById(`antsay-commentbox-${id}`).style.height = 'auto';
      this.setState({
        active: false,
      });
    }
  }

  handleOnSubmit() {
    const { onSubmit } = this.props;
    onSubmit && onSubmit(this.state.value);
  }

  togglePreview() {
    const { preview } = this.state;

    this.setState({
      preview: !preview,
    });

  }

  render() {

    const { active, value, preview } = this.state;
    const { disableSubmit, id } = this.props;

    const disabled = disableSubmit ? true : (value === '');

    return <div className="antsay-commentbox-textarea">
      <div
        style={{display: preview ? 'block' : 'none'}}
        className="antsay-commentbox-preview antsay-markdown"
        dangerouslySetInnerHTML={{__html: markdown(value)}}
      />
      <Input
        style={{display: preview ? 'none' : 'block'}}
        id={`antsay-commentbox-${id}`}
        rows="1"
        size="large"
        className={ active ? 'antsay-commentbox-input-active' : 'antsay-commentbox-input'}
        type="textarea"
        placeholder="添加评论"
        value={value}
        onChange={(e)=>this.handleOnChange(e)}
        onFocus={()=>this.handleOnFocus()}
        onBlur={(e)=>this.handleOnBlur(e)}
      />
      {
        active && <div className="antsay-commentbox-operator">
          <div className="antsay-commentbox-submit">
            <Button
              type="primary"
              disabled={disabled}
              onClick={()=>this.handleOnSubmit()}
            >
              评论
            </Button>
            <span
              onClick={()=>this.togglePreview()}
            >
              {
                preview ? '取消' : '预览'
              }
            </span>
          </div>
          <div className="antsay-commentbox-tips">

          </div>
        </div>
      }
    </div>
  }
}

Textarea.propTypes = {};

export default Textarea;
