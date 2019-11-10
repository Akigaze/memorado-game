import React, { Component } from "react";

import Steps from "../steps";

export default class SuperMemoryHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="super-memo-header">
        <Steps />
      </div>
    );
  }
}
