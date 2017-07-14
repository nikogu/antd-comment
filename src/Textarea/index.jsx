import React, { Component, PropTypes } from 'react';

import { Input, Button } from 'antd';

import autosize from 'autosize';
import { markdown } from '../util';

import './highlight.css';
import './index.less';

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: false,
      active: props.active || false,
      value: '',
    }
  }

  componentDidMount() {
    const { id } = this.props;

    if (id) {
      // autosize
      /* eslint no-undef:0 */
      autosize(document.getElementById(`antsay-commentbox-${id}`));
    }
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
    const { id, active } = this.props;
    const value = e.target.value;

    if (id) {
      if (!value) {
        document.getElementById(`antsay-commentbox-${id}`).style.height = 'auto';
      }
    }

    if (active) return;

    // delay
    setTimeout(() => {
      if (!value) {
        this.setState({
          active: false,
        });
      }
    }, 100);
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
    const { disableSubmit, id, placeholder, textSubmit } = this.props;

    const disabled = disableSubmit ? true : (value === '');

    return <div className="antsay-commentbox-textarea">
      <div
        style={{ display: preview ? 'block' : 'none' }}
        className="antsay-commentbox-preview antsay-markdown"
        dangerouslySetInnerHTML={{ __html: markdown(value) }}
      />
      <Input
        style={{ display: preview ? 'none' : 'block' }}
        id={`antsay-commentbox-${id || Math.random()}`}
        rows="1"
        size="large"
        className={active ? 'antsay-commentbox-input-active' : 'antsay-commentbox-input'}
        type="textarea"
        placeholder={placeholder || '添加评论'}
        value={value}
        onChange={e => this.handleOnChange(e)}
        onFocus={() => this.handleOnFocus()}
        onBlur={e => this.handleOnBlur(e)}
      />
      {
        active && <div className="antsay-commentbox-operator">
          <div className="antsay-commentbox-submit">
            <Button
              type="primary"
              disabled={disabled}
              onClick={() => this.handleOnSubmit()}
            >
              { textSubmit || '评论'}
            </Button>
            {
              !disabled && <span
                onClick={() => this.togglePreview()}
              >
                {
                  preview ? '取消' : '预览'
                }
              </span>
            }
          </div>
          <div className="antsay-commentbox-tips"/>
        </div>
      }
    </div>
  }
}

Textarea.propTypes = {
  id: PropTypes.any,
  active: PropTypes.any,
  textSubmit: PropTypes.any,
  placeholder: PropTypes.any,
  disableSubmit: PropTypes.any,
  onSubmit: PropTypes.func,
};

export default Textarea;
