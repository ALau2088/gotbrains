// Display all tracks
import React, { Component } from 'react';
//import Track from '../tracks/Track';
//import { Link } from 'react-router-dom';

class Trivias extends Component {
  render() {
    // ToDo: change to <Link>
    return (
      <div>
        <h1>Math Trivia</h1>
    <div><a href="/trivias/trivia/addition" className="btn btn-primary btn-lg btn-block mb-5"style={{color: "white", textDecoration: "none"}}>Addition</a>
    <a href="/trivias/trivia/subtraction" className="btn btn-primary btn-lg btn-block mb-5"style={{color: "white", textDecoration: "none"}}>Subtraction</a>
    <a href="/trivias/trivia/multiplication" className="btn btn-primary btn-lg btn-block mb-5"style={{color: "white", textDecoration: "none"}}>Multiplication</a>
    <a href="/trivias/trivia/division" className="btn btn-primary btn-lg btn-block mb-5"style={{color: "white", textDecoration: "none"}}>Division</a>
    </div>
    </div>
    )
  }
}

export default Trivias;
