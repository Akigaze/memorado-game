import React, { Component } from "react";
import { STEP_STATUS } from "../../constant/super-memo";

export default class Step extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return !STEP_STATUS.isEuqal(nextProps.step, this.props.step);
  }

  render() {
    console.log("Step render ...");
    const { step } = this.props;
    return <div id="step" className={step.className} />;
  }
}
