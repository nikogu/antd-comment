'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MinLayout = function MinLayout(_ref) {
  var children = _ref.children,
      minWidth = _ref.minWidth,
      minHeight = _ref.minHeight;
  return _react2.default.createElement(
    'div',
    {
      style: {
        minWidth: minWidth || '',
        minHeight: minHeight || ''
      }
    },
    children
  );
};

MinLayout.propTypes = {
  children: _react.PropTypes.any,
  minWidth: _react.PropTypes.any,
  minHeight: _react.PropTypes.any
};

exports.default = MinLayout;
module.exports = exports['default'];