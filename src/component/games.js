import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import SuperMemory from "./game/super-memo/";

export default class Games extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          Games... ...
        </Route>
        <Route
          path="/super-memo"
          component={({ location }) => <SuperMemory location={location} />}
        />
      </Switch>
    );
  }
}
