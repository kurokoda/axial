import App from './index.js';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const appElement = <App />;
  ReactDOM.render(appElement, div);
  ReactDOM.unmountComponentAtNode(div);
});
