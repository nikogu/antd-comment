import React from 'react';
import ReactDom from 'react-dom';
import MyComponent from '../src';

const App = () => <div>
  <MyComponent>
    hello react component example
  </MyComponent>
</div>;

/* eslint no-undef:0 */
ReactDom.render(<App />, document.getElementById('root'));
