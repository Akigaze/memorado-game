import React, { Component } from "react";
// import {connect} from "react-redux";

export default class NavSideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Nav Side Bar</div>;
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
