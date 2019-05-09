/* eslint-disable sort-imports */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ValueRangeInput from './component/valueRangeInput';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
const content = (
  <div className="app__container">
    <ValueRangeInput />
  </div>
);

ReactDOM.render(content, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
