import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate}>
      <App />
    </AlertProvider>
  </Provider>
);
