import React from "react";
import PropTypes from 'prop-types';

// Presentational component TriviaCard
// Pass question, onClick and handleSubmit as props
const TriviaCard = ({ question, onClick, handleSubmit}) => {
  const { index, num, problem, answers } = question;
  return (
    <React.Fragment>
      <div id= {`card-${index}`} className="page1 Card">
        <div className="card-question">
          <h5 className="card-header">
            {num}
          </h5>
          <div className="card-body">
            <p className="card-text">{problem}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="answers">
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <input type="checkbox" name="sum" value={answers[0]} onClick={onClick}  id={`${num}a`}/>{" "}
            a. {answers[0]}
          </li>
          <li className="list-group-item">
          <input type="checkbox" name="sum" value={answers[1]} onClick={onClick}  id={`${num}b`}/>{" "}
            b. {answers[1]}
          </li>
          <li className="list-group-item">
          <input type="checkbox" name="sum" value={answers[2]} onClick={onClick}  id={`${num}c`}/>{" "}
            c. {answers[2]}
          </li>
          <li className="list-group-item">
          <input type="checkbox" name="sum" value={answers[3]} onClick={onClick}  id={`${num}d`}/>{" "}
            d. {answers[3]}
          </li>
        </ul>
        <input type="submit" className="btn btn-dark btn-sm mb-4 ml-4"/>
        </form>
      </div>
    </React.Fragment>
  );
}

// Validates trivia is an object
TriviaCard.propTypes = {
  question: PropTypes.object.isRequired
}

export default TriviaCard;
