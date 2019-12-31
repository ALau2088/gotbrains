import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import './App.css';
import TriviaCard from './TriviaCard';
import data from './data';
import Score from './Score';
import Timer from './Timer';

//Behavioral and presentational component Trivia
class TriviaMult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triviaQuestions: data.trivias[2].questions,
      question: data.trivias[2].questions[0],
      checked: '',
      prevChecked: '',
      checkedAnswer: '',
      questionsCorrect: 0,
      resetTimer: false,
      gameOver: false
    }
  }

  // Go to next property
  nextQuestion = () => {
    console.log(this.state.question.index)
    const newIndex = this.state.question.index + 1;
    this.setState({
      question: data.trivias[2].questions[newIndex]
    })
  }

  // Go to previous property
  prevQuestion = () => {
    const newIndex = this.state.question.index - 1;
    this.setState({
      question: data.trivias[2].questions[newIndex]
    })
  }

  // Answer Select
  onClick(e){
    // If the answer selected is already selected preventDefault()
    if (this.state.checked === e.target.id){
      e.preventDefault();
    } else if (!this.state.prevChecked) {
      this.setState({
        checked: e.target.id, 
        prevChecked: e.target.id, 
        checkedAnswer: e.target.value
      });
    } else if (this.state.prevChecked){
      // make sure only one answer is selected
      document.getElementById(this.state.prevChecked).checked = false;
      this.setState({
        checked: e.target.id, 
        prevChecked: e.target.id, 
        checkedAnswer: e.target.value
      });
    }
  }

  // Submit Answer
  answerSubmit(e){
    e.preventDefault();
    // Add 1 score for correct answer
    if(this.state.checkedAnswer){
      if(this.state.checkedAnswer ==this.state.question.correctAnswer){
        let correct = this.state.questionsCorrect;
        this.setState({questionsCorrect: correct+1})
      };
      //make sure last box checked is unchecked
      if (this.state.prevChecked){
        document.getElementById(this.state.prevChecked).checked = false;
      }
      // Go to next question and reset timer
      if(this.state.question.index < this.state.triviaQuestions.length-1){
        const newIndex = this.state.question.index + 1;
        // reset checkedAnswer so submit only works if answer is selected on subsequent questions.
        this.setState({
          question: data.trivias[2].questions[newIndex],
          checked: '',
          prevChecked: '',
          checkedAnswer:''
        })
      } else {
        // game is over
        this.setState({gameOver: true})
      }
      this.setState({resetTimer: true})
      setTimeout(() =>this.setState({resetTimer: false}), 1000)
    }
  }

  // Move to next question when time is up
  noTimeLeft(){
    //make sure last box checked is unchecked
    if (this.state.prevChecked){
      document.getElementById(this.state.prevChecked).checked = false;
    }
    if(this.state.question.index < this.state.triviaQuestions.length-1){
      const newIndex = this.state.question.index + 1;
      this.setState({
        question: data.trivias[2].questions[newIndex],
        checked: '',
        prevChecked: '',
        checkedAnswer: '',
      })
    } else {
      // game is over
      this.setState({gameOver: true})
    }
  }

  render() {
    const { 
      triviaQuestions, 
      question, 
      questionsCorrect, 
      resetTimer, 
      gameOver 
    } = this.state;
    return (
      <div className="App">
        {/*Next and Previous buttons*/}
        {/*Next button is disabled when last object is reached*/}
        {/*Previous button is disabled when the first object is reached*/}
        <div className="triviaheader">
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="timer">
            {gameOver ? (
            <Score score = {questionsCorrect}/>
            ) : (
              <Timer 
                timeOut={this.noTimeLeft.bind(this)} 
                resetTimer={resetTimer}
              />
            )}
          </div>
        </div>
        
        {/*
        <button onClick={() => this.nextQuestion()} disabled={question.index === data.trivias[0].questions.length - 1}>Next</button>
        <button onClick={() => this.prevQuestion()} disabled={question.index === 0}>Prev</button>
        */}
        <div className="page1">
          <section>
            <h1>{data.trivias[2].genre}</h1>
          </section>
          {gameOver === false &&
          <div className={`cards-slider active-slide-${question.index}`}>
            <div 
              className="cards-slider-wrapper" 
              style={{
              'transform': `translateX(-${question.index * (100 / triviaQuestions.length)}%)`
              }}
            >
              {
                triviaQuestions.map(question => 
                  <TriviaCard 
                    key={question.num} 
                    question={question} 
                    onClick = {this.onClick.bind(this)}
                    handleSubmit = {this.answerSubmit.bind(this)}
                  />
                )
              }
            </div>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default TriviaMult;