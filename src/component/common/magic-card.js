import React, { Component } from "react";

export default class MagicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.initStatus()
    };
  }

  initStatus() {
    const { status, delay, statuses } = this.props;
    return status || (delay > 0 ? {} : statuses[0] || {});
  }

  statusProceed = () => {
    const { statuses } = this.props;
    const { status } = this.state;
    const nextStatus = statuses[statuses.indexOf(status) + 1];
    nextStatus &&
      setTimeout(() => {
        this.setState({ status: nextStatus }, this.statusProceed);
      }, status.delay);
  };

  componentDidMount() {
    const { status, delay } = this.props;
    if (!status) {
      delay > 0 ? setTimeout(this.statusProceed, delay) : this.statusProceed();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.status !== this.props.status) {
      this.setState({ status: nextProps.status || {} });
    }
  }

  clickCard = () => {
    const { toggle } = this.props;
    const { status } = this.state;

    if (typeof toggle === "function") {
      toggle(status);
    }
  };

  render() {
    const { status } = this.state;
    return (
      <div
        id="magic-card"
        className={status.className}
        style={status.style}
        onClick={this.clickCard}
      />
    );
  }
}
