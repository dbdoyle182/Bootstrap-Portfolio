import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';


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
          </div>
        </Router>
      
    )
  }
}

export default App;
