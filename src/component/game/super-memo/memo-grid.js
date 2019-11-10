import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import MemoryPiece from "./memo-piece";
import { PIECE_TYPE, STEP_STATUS } from "../../../constant/super-memo";

const { SILENT, ACTIVE } = PIECE_TYPE;

export class MemoryGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restart: false
    };
  }

  generatePieces() {
    const { nrow, ncol, targets } = this.props;
    if (nrow && ncol && targets) {
      const pieces = new Array(nrow * ncol).fill(SILENT);
      const sampleindexes = _.sampleSize(Object.keys(pieces), targets);
      sampleindexes.forEach(i => (pieces[i] = ACTIVE));
      return pieces;
    }
    return [];
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const restart = nextProps.times > this.props.times;
    restart && this.setState({ restart: !this.state.restart });
  }

  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }

  render() {
    const { nrow, ncol, targets } = this.props;
    const { restart } = this.state;
    const pieces = this.generatePieces();
    return (
      <div id="memo-grid">
        {_.chunk(pieces, ncol).map((ps, i) => {
          return (
            <div className="row" key={i}>
              {ps.map((p, j) => (
                <MemoryPiece key={j} type={p} refresh={restart} />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { params, times } = state.superMemo;
  return {
    targets: params.targets,
    nrow: params.nrow,
    ncol: params.ncol,
    times
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryGrid);
