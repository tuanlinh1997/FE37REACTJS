import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      username: "Cybersoft"
    };
  }

  login = () => {
    this.setState({
      isLogin: true
    });
  };

  renderHTML = () => {
    return this.state.isLogin ? (
      <h4>Hello {this.state.username}</h4>
    ) : (
      <button className="btn btn-success" onClick={this.login}>
        Login
      </button>
    );
  };

  render() {
    return (
      <div>
        <h3 className="title">*State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
