import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "@/assets/scss/index.scss"; //全站css樣式
import 'material-icons/iconfont/material-icons.css' // icon

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> // 嚴格模式影響開發暫時關掉
  <BrowserRouter>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </BrowserRouter>
  // </React.StrictMode>
);
