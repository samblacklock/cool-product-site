import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './util/global.module.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
