import React, { Component } from "react";
import * as _ from "lodash";

import MemoryPiece from "./memo-piece";

import { PIECE_TYPE } from "../../../constant/super-memo";

const { SILENT, ACTIVE } = PIECE_TYPE;

export default class MemoryGrid extends Component {
  constructor(props) {
    super(props);
    this.pieces = this.initPieces();
  }

  initPieces() {
    const { nrow, ncol, targets } = this.props;
    const pieces = new Array(nrow * ncol).fill(SILENT);
    const sampleindexes = _.sampleSize(Object.keys(pieces), targets);
    sampleindexes.forEach(i => (pieces[i] = ACTIVE));
    return pieces;
  }

  render() {
    const { nrow, ncol, targets } = this.props;
    return (
      <div id="memo-grid">
        {_.chunk(this.pieces, ncol).map((ps, i) => {
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
