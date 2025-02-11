import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ScrollToTop } from "./components/shared/scrollToTop/scroll";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
        theme="light"
      />
      <App />
    </Provider>
  </React.StrictMode>
);
