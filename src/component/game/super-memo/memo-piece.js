import React, { Component } from "react";
import * as _ from "lodash";

import { PIECE_TYPE } from "../../../constant/super-memo";

const { SILENT, ACTIVE } = PIECE_TYPE;

export default class MemoryPiece extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;
    const color = type === ACTIVE ? "#00bd98" : "white";
    const className = type === ACTIVE ? "active" : "silent";
    return (
      <div
        id="memo-piece"
        className={className}
        style={{ backgroundColor: color }}
      />
    );
  }
}
