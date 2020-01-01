import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import TriviaAdd from './components/trivias/TriviaAdd';
import TriviaSub from './components/trivias/TriviaSub';
import TriviaMult from './components/trivias/TriviaMult';
import TriviaDiv from './components/trivias/TriviaDiv';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className='container'>
            {/* Route-based code splitting*/}
            <Switch>
              <Route exact path='/' component={Index} />
              <Route
                exact
                path='/trivias/trivia/addition'
                component={TriviaAdd}
              />
              <Route
                exact
                path='/trivias/trivia/subtraction'
                component={TriviaSub}
              />
              <Route
                exact
                path='/trivias/trivia/multiplication'
                component={TriviaMult}
              />
              <Route
                exact
                path='/trivias/trivia/division'
                component={TriviaDiv}
              />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
