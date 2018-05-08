import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';


class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/portfolio' component={HomePage} />
          <Route path='/skills' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default App;
