import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./nav-item";
// import {connect} from "react-redux";

const GAMES = [
    { id: "super-memo", name: "Super Memory", component: "" },
    { id: "traffic-light", name: "Traffic Light", component: "" },
    { id: "number-letter", name: "Number and Letter", component: "" },
    { id: "pair", name: "Pair", component: "" },
    { id: "step-stone", name: "Stepping Stone", component: "" }
];

export default class NavSideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {GAMES.map(game => {
          return (
            <NavLink key={game.id} to={`/${game.id}`}>
              <NavItem {...game} />
            </NavLink>
          );
        })}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos,
//         filter: state.filter
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeFilter: (filter) => {dispatch(changeFilterAction(filter))}
//     }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
