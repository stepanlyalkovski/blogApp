import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import configureStore from './configureStore';
import './index.css';

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));