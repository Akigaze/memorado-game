import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import NavSideBar from "./component/nav-side-bar";
import Games from "./component/games";
import InfoBar from "./component/info-bar";

import "./style/app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div id="nav-left">
            <NavSideBar />
          </div>
          <div id="game-middle">
            <Games />
          </div>
          <div id="info-right">
            <InfoBar />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
