import React, { Component } from "react";
import "../../../style/super-memo.css";

export default class SuperMemory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="super-memo" className="game">
        <div id="game-header">
          Super Memory Header... ...
        </div>
        <div id="game-content">Super Memory Content... ...</div>
      </div>
    );
  }
}
