import React from 'react'

const Score = ({score}) => {
  return (
    <div className="card bg-light mb-3 score" style={{width: "18rem"}}>
    <div className="card-header">SCORE</div>
    <div className="card-body">
      <h1 className="card-title">{score} OUT OF 10</h1>
    </div>
  </div>
  )
}

export default Score;

