// Display all tracks
import React, { Component } from 'react';
//import Track from '../tracks/Track';
import { Link } from 'react-router-dom';

class Trivias extends Component {
  render() {
    // ToDo: change to <Link>
    return (
      <div>
        <h1>Math Trivia</h1>
        <div>
          <Link
            to='/trivias/trivia/addition'
            className='btn btn-primary btn-lg btn-block mb-5'
            style={{ textDecoration: 'none' }}
          >
            Addition
          </Link>
          <Link
            to='/trivias/trivia/subtraction'
            className='btn btn-primary btn-lg btn-block mb-5'
            style={{ textDecoration: 'none' }}
          >
            Subtraction
          </Link>
          <Link
            to='/trivias/trivia/multiplication'
            className='btn btn-primary btn-lg btn-block mb-5'
            style={{ textDecoration: 'none' }}
          >
            Multiplication
          </Link>
          <Link
            to='/trivias/trivia/division'
            className='btn btn-primary btn-lg btn-block mb-5'
            style={{ textDecoration: 'none' }}
          >
            Division
          </Link>
        </div>
      </div>
    );
  }
}

export default Trivias;
