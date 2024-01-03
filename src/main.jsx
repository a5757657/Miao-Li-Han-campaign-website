import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ResetStyle from "./styles/ResetStyle.jsx"; // 預設樣式重置
import GlobalStyle from "./styles/GlobalStyle.jsx"; // styled-component全域樣式

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
