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
  restart,
  end
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

  UNSTAFE_componentWillReceiveProps(nextProps){

  }

  componentDidUpdate(prevProps) {
    if (!prevProps.end && this.props.end) {
      this.props.actions.endGame();
      setTimeout(() => this.props.actions.restartGame(), RESTART_DELAY);
    }
  }

  componentWillUnmount() {
    this.props.actions.resetGame();
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
    end:
      STEP_STATUS.isEuqal(currentStep.status, STEP_STATUS.LOSING) ||
      currentStep.index === params.target
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      initGameParams: (...args) => dispatch(initParams.apply(null, args)),
      endGame: (...args) => dispatch(end.apply(null, args)),
      resetGame: (...args) => dispatch(reset.apply(null, args)),
      restartGame: (...args) => {
        dispatch(restart.apply(null, args));
        dispatch(resetStep.apply(null, args));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperMemory);
