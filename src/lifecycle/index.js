import React, { Component } from "react";
import Child from "./child";
import Pure from "./pure";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      username: "Cybersoft"
    };
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    /**Quan Trọng */
    console.log("componentDidMount");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState){
      /**
       * return true: cho phép update
       * return fale: không có phép update
       */
      console.log('shouldComponentUpdate',nextProps, nextState)
      if(nextState.username === "Hello Linh"){
          return false;
      }
      return true;
  }

  UNSAFE_componentWillReceiveProps(){
      console.log("UNSAFE_componentWillReceiveProps")
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1 className="title">Lifecycle</h1>
        <h4>Username: {this.state.username}</h4>
        <Child username={this.state.username}/>
        <Pure />
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ username: "LinhTL" });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
