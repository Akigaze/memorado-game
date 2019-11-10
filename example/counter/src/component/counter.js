import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count:0
    }
  }

  addCount = () => {
      const {key, clickAdd} = this.props;
      this.setState(preState => {
          return {count:++preState.count}
      });
      clickAdd(key);
  }

  reduceCount = () => {
      const {key, clickReduce} = this.props;
      this.setState(preState => {
          return {count:--preState.count}
      });
      clickReduce(key);
  }

  render() {
    const {clickAdd, clickReduce} = this.props;
    const {count} = this.state;
    return (
      <div>
        <h1 className="jumbotron-heading text-center">{count}</h1>
        <p className="text-center">
          <button onClick={this.addCount} className="btn btn-primary mr-2">
            Increase
          </button>
          <button onClick={this.reduceCount} className="btn btn-danger mr-2">
            Decrease
          </button>
        </p>
      </div>
    );
  }
}

export default Counter;
