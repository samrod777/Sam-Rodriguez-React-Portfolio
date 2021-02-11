import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
// import Container from "./components/Container";
// import Navtabs from "./components/Navtabs";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Resume from "./pages/Resume";
// import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <>
        {/* <Container> */}
          {/* <Navtabs /> */}
          {/* <Route exact path="/portfolio-react/" component={Home} /> */}
          {/* <Route exact path="/portfolio-react/about" component={About} /> */}
          {/* <Route exact path="/portfolio-react/projects" component={Portfolio} /> */}
          <Navbar/>
          <Portfolio/>
          {/* <Route path="/portfolio-react/resume" component={Resume} /> */}
          {/* <Footer /> */}
        {/* </Container> */}
      </>
    </Router>
  );
}

export default App;