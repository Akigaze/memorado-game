import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Counter from "./component/counter";
import "./style/app.css";

import {increaseAction, decreaseAction} from "./action/countActionCreator";

const arrayWithLength = (length, value=null) => {
    return new Array(length).fill(value);
};

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {increase, decrease} = this.props;
        return (
            <div className="container">
                <h1>{`The Sum: ${this.props.sum}`}</h1>
                <CounterGroup size={3} increase={increase} decrease={decrease}/>
            </div>
        )
    }
}

const CounterGroup = (props) => {
    const {size, increase, decrease} = props;
    return arrayWithLength(size).map((count, index) => {
        return <Counter key={index} clickAdd={increase} clickReduce={decrease}/>
    })
};

const mapStateToProps = (state) => {
    return{
        sum:state.sum
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {increase: increaseAction, decrease: decreaseAction},
        dispatch
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
