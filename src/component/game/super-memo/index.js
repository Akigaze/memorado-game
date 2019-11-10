import React, { Component } from "react";
import MemoryGrid from "./memo-grid";
import SuperMemoryHeader from "./super-memo-header";
import "../../../style/super-memo.css";

import { QUERY_PARAMETER as param } from "../../../constant/super-memo";

export default class SuperMemory extends Component {
  constructor(props) {
    super(props);
    const query = new URLSearchParams(location.search);
    Object.values(param).forEach(
      p => (this[p.name] = Number(query.get(p.name)) || p.defaultValue)
    );
  }

  render() {
    return (
      <div id="super-memo" className="game">
        <div id="game-header">
          <SuperMemoryHeader targets={this.targets} />
        </div>
        <div id="game-content">
          <MemoryGrid
            nrow={this.nrow}
            ncol={this.ncol}
            targets={this.targets}
          />
        </div>
      </div>
    );
  }
}
