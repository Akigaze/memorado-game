import React, { Component } from "react";
import PropTypes from "prop-types";

const TOGGLE_FUNC = () => {};

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

  _statusProceed = () => {
    const { statuses } = this.props;
    const { status } = this.state;
    const nextStatus = statuses[statuses.indexOf(status) + 1];
    nextStatus &&
      setTimeout(() => {
        this.setState({ status: nextStatus }, this.statusProceed);
      }, status.delay);
  };

  statusProceed() {
    const { status, delay } = this.props;
    if (!status) {
      delay > 0
        ? setTimeout(this._statusProceed, delay)
        : this._statusProceed();
    }
  }

  componentDidMount() {
    this.statusProceed();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  componentDidUpdate({ status, statuses }) {
    if (status !== this.props.status || statuses !== this.props.statuses) {
      this.setState({ status: this.initStatus() }, () => {
        this.statusProceed();
      });
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
    const { ID } = this.props;
    return (
      <div
        id={ID}
        className={status.className}
        style={status.style}
        onClick={this.clickCard}
      />
    );
  }
}

MagicCard.propTypes = {
  ID: PropTypes.string,
  status: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object
  }),
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      style: PropTypes.object,
      delay: PropTypes.number
    })
  ),
  delay: PropTypes.number,
  toggle: PropTypes.func
};

MagicCard.defaultProps = {
  ID: "magic-card",
  statuses: [],
  delay: 0,
  toggle: TOGGLE_FUNC
};
