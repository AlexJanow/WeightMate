import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
function App() {
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
