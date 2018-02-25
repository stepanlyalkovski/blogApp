import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import './index.css';

const appElement = React.createElement(App);

ReactDOM.render(appElement, document.getElementById('root'));