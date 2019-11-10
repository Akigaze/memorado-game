import React, { Component } from "react";
import { connect } from "react-redux";
import MemoryGrid from "./memo-grid";
import SuperMemoryHeader from "./super-memo-header";
import "../../../style/super-memo.css";

import {
  QUERY_PARAMETER as param,
  STEP_STATUS,
  RESTART_DELAY
} from "../../../constant/super-memo";
import {
  initParams,
  reset,
  resetStep,
  timesUp
} from "../../../action/super-memo";

export class SuperMemory extends Component {
  constructor(props) {
    super(props);
    this.params = {};
    const query = new URLSearchParams(location.search);
    Object.values(param).forEach(
      p => (this.params[p.name] = Number(query.get(p.name)) || p.defaultValue)
    );
  }

  componentDidMount() {
    this.props.actions.initGameParams(this.params);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.again && this.props.again) {
      setTimeout(() => this.props.actions.resetStep(), RESTART_DELAY);
    }
  }

  componentWillUnmount() {
    this.props.actions.reset();
  }

  render() {
    return (
      <div id="super-memo" className="game">
        <div id="game-header">
          <SuperMemoryHeader />
        </div>
        <div id="game-content">
          <MemoryGrid />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { params, currentStep } = state.superMemo;
  return {
    again:
      STEP_STATUS.isEuqal(currentStep.status, STEP_STATUS.LOSING) ||
      currentStep.index + 1 === params.targets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      initGameParams: (...args) => dispatch(initParams.apply(null, args)),
      reset: (...args) => dispatch(reset.apply(null, args)),
      resetStep: (...args) => {
        dispatch(resetStep.apply(null, args));
        dispatch(timesUp.apply(null, args));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperMemory);
