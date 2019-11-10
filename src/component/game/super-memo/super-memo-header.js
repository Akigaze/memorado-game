import React, { Component } from "react";
import Steps from "../steps";

export default class SuperMemoryHeader extends Component {
  constructor(props) {
    super(props);
  }

  convertSteps() {
    const { targets } = this.props;
    return new Array(targets).fill(1);
  }

  render() {
    const { targets } = this.props;

    return (
      <div id="super-memo-header">
        <Steps steps={this.convertSteps()} />
      </div>
    );
  }
}
