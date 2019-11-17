import React, { Component } from "react";

export default class NavItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name } = this.props;
    return <div>{name}</div>;
  }
}
