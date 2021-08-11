import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
