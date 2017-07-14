'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _index = require('./CommentBox/index.jsx');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./Comment/index.jsx');

var _index4 = _interopRequireDefault(_index3);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AntDComment = function (_Component) {
  _inherits(AntDComment, _Component);

  function AntDComment(props) {
    _classCallCheck(this, AntDComment);

    var _this = _possibleConstructorReturn(this, (AntDComment.__proto__ || Object.getPrototypeOf(AntDComment)).call(this, props));

    _this.id = _shortid2.default.generate();
    _this.state = {
      disableSubmit: false
    };
    return _this;
  }

  _createClass(AntDComment, [{
    key: 'handleDelete',
    value: function handleDelete(c) {
      var onDelete = this.props.onDelete;

      if (onDelete) onDelete(c);
    }
  }, {
    key: 'handleOnSubmit',
    value: function handleOnSubmit(val) {
      var _this2 = this;

      var onComment = this.props.onComment;


      this.setState({
        disableSubmit: true
      });

      if (onComment) {
        onComment(val, null, function () {
          _this2.setState({
            disableSubmit: false
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var disableSubmit = this.state.disableSubmit;
      var data = this.props.data;


      return _react2.default.createElement(
        'div',
        { className: 'antsay-ui' },
        _react2.default.createElement('div', { className: 'antsay-top' }),
        _react2.default.createElement(
          'div',
          { className: 'antsay-commentbox-wrapper' },
          _react2.default.createElement(_index2.default, {
            id: this.id,
            disableSubmit: disableSubmit,
            data: data,
            onSubmit: function onSubmit(val) {
              return _this3.handleOnSubmit(val);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'antsay-comments' },
          data.comments.map(function (comment, i) {
            return _react2.default.createElement(_index4.default, {
              currentUser: data.currentUser,
              key: 'comment-' + i,
              data: comment,
              onDelete: function onDelete(c) {
                return _this3.handleDelete(c);
              }
            });
          })
        ),
        data.more && _react2.default.createElement(
          'div',
          { className: 'antsay-more' },
          '\u67E5\u770B\u66F4\u591A\u8BC4\u8BBA'
        )
      );
    }
  }]);

  return AntDComment;
}(_react.Component);

AntDComment.propTypes = {
  data: _react.PropTypes.object,
  onComment: _react.PropTypes.func,
  onDelete: _react.PropTypes.func,
  onTop: _react.PropTypes.func,
  onLike: _react.PropTypes.func,
  onGetMore: _react.PropTypes.func
};

exports.default = AntDComment;
module.exports = exports['default'];