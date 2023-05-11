import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from '@/store'
import "@/assets/scss/index.scss"; //全站css樣式
import 'material-icons/iconfont/material-icons.css' // icon

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
