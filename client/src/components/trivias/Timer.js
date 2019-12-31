import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 59
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.resetTimer) {
      this.setState({ time: 59 });
    }
  }

  tick() {
    if (this.state.time > 0) {
      let newTime = this.state.time;
      this.setState({
        time: (newTime -= 1)
      });
    } else {
      this.props.timeOut();
      this.setState({
        time: 59
      });
    }
  }

  /*
  resetTime(){
    if(this.props.resetTimer){
      this.setState({
        time: 59
      });
      //this.tick();
      console.log('tick')
    }
  }
  */

  render() {
    const { time } = this.state;
    let seconds = time < 10 ? `0${time}` : time;

    return (
      <div className="card bg-light mb-3 time" style={{ width: "18rem" }}>
        <div className="card-header">TIME</div>
        <div className="card-body">
          <h1 className="card-title">0:{seconds}</h1>
        </div>
      </div>
    );
  }
}

export default Timer;
