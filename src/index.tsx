import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import "./App.css"; // Import your custom CSS file

import Router from "./router";
import i18n from "./translation";

const App: React.FC = () => {
  const [isFakeDark, setIsFakeDark] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
  }, [isFakeDark]);

  return (
    <div>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </BrowserRouter>

      <button
        onClick={() => setIsFakeDark((prev) => !prev)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
