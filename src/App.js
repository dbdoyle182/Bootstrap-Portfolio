import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './App.css'


class App extends Component {
  render() {
    return(
      
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Navbar />
            <div id="SideNav" className="sidenav">
              <a id="github" href="https://github.com/dbdoyle182" rel="noopener noreferrer">Github</a>
              <a id="linkedin" href="https://www.linkedin.com/in/daniel-doyle-b34a90ba/" rel="noopener noreferrer">LinkedIn</a>
              <a id="resume" href="https://uptowork.com/mycv/doyle" rel="noopener noreferrer">Resume</a>
              <a id='email' href='mailto:dbdoyle182@gmail.com' target='_top' rel='noopener noreferrer'><i class="fa fa-envelope"></i> Contact</a>
            </div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/skills' component={Skills} />
            </Switch>
            <Footer />
          </div>
        </Router>
      
    )
  }
}

export default App;
