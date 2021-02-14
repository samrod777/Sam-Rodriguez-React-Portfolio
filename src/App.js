import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
// import Container from "./components/Container";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from './pages/Contact';
import Connect from './components/Connect';


function App() {
    return (
        <HashRouter basename="react-portfolio">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <About/>
                    </Route>
                    <Route exact path="/projects">
                        <Portfolio/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                    <Route>
                        <About/>
                    </Route>
                </Switch>
                <Connect/>
                <Footer />
        </HashRouter>
    );
}






//   return (
//     <Router>
//       <>
//         {/* <Container> */}
//           <Navbar/>
//           <Route exact path="/" Component={About}/>
//           <Route exact path="/portfolio-react/about" component={About} />
//           <Route exact path="/portfolio-react/contact" component={Contact} />
//           <Route exact path="/portfolio-react/projects" component={Portfolio} />
//           <Footer/>
//         {/* </Container> */}
//       </>
//     </Router>
//   );
// }

export default App;