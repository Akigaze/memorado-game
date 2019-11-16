import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import MemoryPiece from "./memo-piece";
import { PIECE_TYPE, STEP_STATUS } from "../../../constant/super-memo";

const { SILENT, ACTIVE } = PIECE_TYPE;

export class MemoryGrid extends Component {
  constructor(props) {
    super(props);
  }

  generatePieces() {
    const { nrow, ncol, target } = this.props;
    if (nrow && ncol && target) {
      const pieces = new Array(nrow * ncol).fill(SILENT);
      const sampleindexes = _.sampleSize(Object.keys(pieces), target);
      sampleindexes.forEach(i => (pieces[i] = ACTIVE));
      return pieces;
    }
    return [];
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps) {
    const { nrow, ncol, target, end } = this.props;
    const { nrow: nrow_, ncol: ncol_, target: target_, end: end_ } = nextProps;
    return (
      nrow !== nrow_ || ncol !== ncol_ || target !== target_ || (end_ && !end)
    );
  }

  render() {
    const { nrow, ncol, target } = this.props;
    const pieces = this.generatePieces();
    return (
      <div id="memo-grid">
        {_.chunk(pieces, ncol).map((ps, i) => {
          return (
            <div className="row" key={i}>
              {ps.map((p, j) => (
                <MemoryPiece key={j} type={p} />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { params, end } = state.superMemo;
  const { target, nrow, ncol } = params;
  return { target, nrow, ncol, end };
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
