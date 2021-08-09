import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Main />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
