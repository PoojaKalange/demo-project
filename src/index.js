import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';

import './index.css';
import App from './App';
import './i18n';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

