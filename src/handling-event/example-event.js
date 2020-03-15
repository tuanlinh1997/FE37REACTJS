import React, { Component } from "react";

export default class ExampleEvent extends Component {
  isLogin = false;
  username = "Cybersoft";

  //   renderHTML = () => {
  //     if (this.isLogin) {
  //       return <h4>Hello {this.username}</h4>;
  //     }

  //     return <button className="btn btn-success">Login</button>;
  //   };

  login = () => {
    this.isLogin = true;
    console.log(this.isLogin);
  };

  renderHTML = () => {
    return this.isLogin ? (
      <h4>Hello {this.username}</h4>
    ) : (
      <button className="btn btn-success" onClick={this.login}>
        Login
      </button>
    );
  };

  render() {
    return (
      <div>
        <h3 className="title">*ExampleEvent</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
