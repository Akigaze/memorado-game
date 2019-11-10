import React, { Component } from "react";

export default class Step extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { step } = this.props;
    return <div id="step" className={step.className}/>;
  }
}
