import React, { Component } from "react";
import Steps from "../steps";
import "../../style/super-memo.css";

export default class SuperMemory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="super-memo" className="game">
        <div id="game-header">
          <Steps steps={[1, 1, 1, 1, 1]} />
        </div>
        <div id="game-content">Super Memory... ...</div>
      </div>
    );
  }
}
