import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./App.css"; // Import your custom CSS file

import Router from "./router";

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
          <Router />
      </HashRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
