import React, { Component } from "react";
import { connect } from "react-redux";
import * as _ from "lodash";

import MagicCard from "../../common/magic-card";
import {
  PIECE_TYPE,
  PIECE_STATUS,
  PIECE_DELAY,
  STEP_STATUS
} from "../../../constant/super-memo";
import { updateStep } from "../../../action/super-memo";
const { SILENT, ACTIVE } = PIECE_TYPE;

export class MemoryPiece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: undefined,
      statuses: this.initStatusesByType(),
      refresh: false
    };
  }

  isActiveType() {
    return this.props.type === ACTIVE;
  }

  isInProgressStatus(status) {
    return status === PIECE_STATUS.SILENT && !this.props.end;
  }

  shouldRefresh(prevProps, curProps) {
    return prevProps.end && !curProps.end;
  }

  initStatusesByType() {
    const { NONE, SILENT_ENTER, SILENT, ACTIVE, ACTIVE_OUT } = PIECE_STATUS;
    return this.isActiveType()
      ? [NONE, ACTIVE, ACTIVE_OUT, SILENT]
      : [NONE, SILENT_ENTER, SILENT];
  }

  componentDidMount() {}

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.end && nextProps.end && this.isActiveType()) {
      setTimeout(() => {
        this.setState({ status: PIECE_STATUS.ACTIVE });
      }, PIECE_DELAY.ANIMATION_DELAY);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { status, statuses } = this.state;
    return (
      this.shouldRefresh(this.props, nextProps) ||
      status !== nextState.status ||
      statuses !== nextState.statuses
    );
  }

  componentDidUpdate(prevProps) {
    if (this.shouldRefresh(prevProps, this.props)) {
      const nextStatuses = this.initStatusesByType();
      nextStatuses.unshift(PIECE_STATUS.END);
      this.setState(
        {
          status: undefined,
          statuses: nextStatuses,
          refresh: true
        },
        () => {
          this.setState({ refresh: false });
        }
      );
    }
  }

  clickMagicCard = status => {
    if (this.isInProgressStatus(status)) {
      const { currentStep } = this.props;
      const isRightPiece = this.isActiveType();
      this.setState({
        status: isRightPiece ? PIECE_STATUS.ACTIVE : PIECE_STATUS.INCORRECT
      });
      this.props.actions.updateProgress(
        currentStep.index + isRightPiece,
        isRightPiece ? STEP_STATUS.IN_PROGRESS : STEP_STATUS.LOSING
      );
    }
  };

  render() {
    const { statuses, status, refresh } = this.state;
    return (
      <MagicCard
        id="memo-piece"
        status={status}
        statuses={statuses}
        reset={refresh}
        toggle={this.clickMagicCard}
      />
    );
  }
}

const mapStateToProps = state => {
  const { currentStep, end } = state.superMemo;
  return { currentStep, end };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    actions: {
      updateProgress: (...args) => dispatch(updateStep.apply(null, args))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryPiece);
