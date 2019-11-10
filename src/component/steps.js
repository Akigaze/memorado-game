import React, { Component } from "react";

export default class Steps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { steps } = this.props;
    return (
      <div>
        Your Rate of Progress{" "}
        {steps.map((step, i) => {
          return <span key={i} id="step" />;
        })}
      </div>
    );
  }
}
