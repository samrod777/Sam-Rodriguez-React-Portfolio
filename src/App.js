import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
// import Container from "./components/Container";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <>
        {/* <Container> */}
          <Navbar/>
          <Route exact path="/" Component={About}/>
          <Route exact path="/portfolio-react/about" component={About} />
          <Route exact path="/portfolio-react/contact" component={Contact} />
          <Route exact path="/portfolio-react/projects" component={Portfolio} />
          <Footer/>
        {/* </Container> */}
      </>
    </Router>
  );
}

export default App;