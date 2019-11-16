import React, { Component } from "react";
import { connect } from "react-redux";

import Step from "./step";
import { arrayUtil as util } from "../../util/";
import { STEP_STATUS } from "../../constant/super-memo";

export class Steps extends Component {
  constructor(props) {
    super(props);
  }

  convertSteps() {
    const { target, currentStep } = this.props;
    return util.fill(new Array(target), i => {
      const status =
        i === currentStep.index
          ? currentStep.status
          : i < currentStep.index
          ? STEP_STATUS.FINISHED
          : STEP_STATUS.READY;
      return _.clone(status);
    });
  }

  render() {
    const steps = this.convertSteps();
    return (
      <div id="steps">
        <div className="title">Your Reset of Blocks</div>
        {steps.map((step, i) => <Step key={i} step={step} /> )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { params, currentStep } = state.superMemo;
  return { target: params.target, currentStep };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Steps);
