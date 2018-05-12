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
      
        <Router>
          <div>
            <Navbar />
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
