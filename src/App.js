import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Weight Mate";
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
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
