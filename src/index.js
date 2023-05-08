import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '@/assets/scss/index.scss' //全站css樣式

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 嚴格模式影響開發暫時關掉
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);