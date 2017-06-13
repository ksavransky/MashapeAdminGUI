import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app.js'
import './css/app.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
