import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import MemoryPiece from "./memo-piece";
import { PIECE_TYPE } from "../../../constant/super-memo";

const { SILENT, ACTIVE } = PIECE_TYPE;

export class MemoryGrid extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const { nrow, ncol, targets } = this.props;
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
  const { params } = state.superMemo;
  return { targets: params.targets, nrow: params.nrow, ncol: params.ncol };
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
