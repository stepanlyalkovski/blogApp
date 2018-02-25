import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const appElement = React.createElement(App);

ReactDOM.render(appElement, document.getElementById('root'));