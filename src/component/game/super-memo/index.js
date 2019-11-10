import React, { Component } from "react";
import { connect } from "react-redux";
import MemoryGrid from "./memo-grid";
import SuperMemoryHeader from "./super-memo-header";
import "../../../style/super-memo.css";

import { QUERY_PARAMETER as param } from "../../../constant/super-memo";
import { initParams, reset } from "../../../action/super-memo";

export class SuperMemory extends Component {
  constructor(props) {
    super(props);
    this.params = {};
    const query = new URLSearchParams(location.search);
    Object.values(param).forEach(
      p => (this.params[p.name] = Number(query.get(p.name)) || p.defaultValue)
    );
  }

  componentDidMount() {
    this.props.actions.initGameParams(this.params);
  }

  componentWillUnmount() {
    this.props.actions.reset();
  }

  render() {
    return (
      <div id="super-memo" className="game">
        <div id="game-header">
          <SuperMemoryHeader />
        </div>
        <div id="game-content">
          <MemoryGrid />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      initGameParams: (...args) => dispatch(initParams.apply(null, args)),
      reset: (...args) => dispatch(reset.apply(null, args))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperMemory);
