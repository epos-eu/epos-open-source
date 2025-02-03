import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./App.css"; // Import your custom CSS file

import Router from "./router";

const App: React.FC = () => {
  // const [isFakeDark, setIsFakeDark] = useState<boolean>(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
  // }, [isFakeDark]);

  return (
    <div>
      <HashRouter>
          <Router />
      </HashRouter >

      {/* <button
        onClick={() => setIsFakeDark((prev) => !prev)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
