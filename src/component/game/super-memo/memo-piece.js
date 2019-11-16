import React, { Component } from "react";
import { connect } from "react-redux";
import * as _ from "lodash";

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
      status: PIECE_STATUS.NONE,
      inProgress: false
    };
  }

  initStatusByType() {
    return this.isActiveType() ? PIECE_STATUS.ACTIVE : PIECE_STATUS.SILENT;
  }

  isActiveType() {
    return this.props.type === ACTIVE;
  }

  toBeReady() {
    setTimeout(() => {
      this.setState({ status: this.initStatusByType() }, () =>
        setTimeout(this.toBeInProgress, PIECE_DELAY.TO_IN_PROGRESS)
      );
    }, PIECE_DELAY.DEFAULT);
  }

  toBeInProgress = () => {
    const nextStatus = this.state.status.next;
    const isSilent = nextStatus === PIECE_STATUS.SILENT;
    this.setState({ status: nextStatus, inProgress: isSilent }, () => {
      isSilent || setTimeout(this.toBeInProgress, PIECE_DELAY.ANIMATION_DELAY);
    });
  };

  componentDidMount() {
    this.toBeReady();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.refresh !== this.props.refresh) {
      this.setState(
        {
          status: PIECE_STATUS.NONE,
          inProgress: false
        },
        this.toBeReady
      );
    }
  }

  clickPiece = event => {
    const { status, inProgress, end } = this.state;
    if (inProgress) {
      const { currentStep } = this.props;
      const isRightPiece = this.isActiveType();
      this.setState({
        status: isRightPiece ? PIECE_STATUS.ACTIVE : PIECE_STATUS.INCORRECT,
        inProgress: isRightPiece
      });
      inProgress &&
        this.props.actions.updateProgress(
          currentStep.index + isRightPiece,
          isRightPiece ? STEP_STATUS.IN_PROGRESS : STEP_STATUS.LOSING
        );
    }
  };

  render() {
    const { status } = this.state;
    return (
      <div
        id="memo-piece"
        className={status.className}
        style={{ backgroundColor: status.color }}
        onClick={this.clickPiece}
      />
    );
  }
}

const mapStateToProps = state => {
  const { currentStep } = state.superMemo;
  return { currentStep };
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
