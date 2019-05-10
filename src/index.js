/* eslint-disable sort-imports */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ValueRangeInput from './component/valueRangeInput';

const root = document.getElementById('root');
const content = (
  <div className="app__container">
    <ValueRangeInput />
  </div>
);

ReactDOM.render(content, root);
