import React, { Component } from "react";
import PropTypes from "prop-types";

const TOGGLE_FUNC = () => {};

export default class MagicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  currentStatus() {
    const { status, statuses } = this.props;
    return status || statuses[this.state.index] || {};
  }

  _statusProceed = () => {
    const { statuses } = this.props;
    const status = this.currentStatus();
    const nextIndex = statuses.indexOf(status) + 1;
    nextIndex < statuses.length &&
      setTimeout(() => {
        this.setState({ index: nextIndex }, this.statusProceed);
      }, status.delay);
  };

  statusProceed() {
    const { status } = this.props;
    if (!status) {
      this._statusProceed();
    }
  }

  componentDidMount() {
    this.statusProceed();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    const { status, reset } = this.props;
    return (
      status !== nextProps.status ||
      this.state.index !== nextState.index ||
      (!reset && nextProps.reset)
    );
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.reset && this.props.reset) {
      this.setState({ index: 0 }, () => {
        this.statusProceed();
      });
    }
  }

  clickCard = () => {
    this.props.toggle(this.currentStatus());
  };

  render() {
    const { id } = this.props;
    const status = this.currentStatus();
    return (
      <div
        id={id}
        className={status.className}
        style={status.style}
        onClick={this.clickCard}
      />
    );
  }
}

MagicCard.propTypes = {
  id: PropTypes.string,
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
  reset: PropTypes.bool,
  toggle: PropTypes.func
};

MagicCard.defaultProps = {
  id: "magic-card",
  statuses: [],
  reset: false,
  toggle: TOGGLE_FUNC
};
