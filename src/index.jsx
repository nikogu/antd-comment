import React, { PropTypes } from 'react';

const MinLayout = ({ children, minWidth, minHeight }) => <div
  style={{
    minWidth: minWidth || '',
    minHeight: minHeight || '',
  }}
>
  {
    children
  }
</div>;

MinLayout.propTypes = {
  children: PropTypes.any,
  minWidth: PropTypes.any,
  minHeight: PropTypes.any,
};

export default MinLayout;
