import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';


// Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <Router>

      <NavBar/>
      
      <Route path="/" exact component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/contact" component={Contact}/>

    </Router>
  );
}

export default App;