import React, { Component } from "react";

export default class Steps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { steps } = this.props;
    return (
      <div id="steps">
        <div className="title">Your Rate of Progress </div>
        {steps.map((step, i) => (
          <div key={i} id="step" />
        ))}
      </div>
    );
  }
}
