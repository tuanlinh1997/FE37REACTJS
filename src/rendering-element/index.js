import React, { Component } from "react";

export default class RenderingElement extends Component {
  username = "Nguyen";
  lop = "FE37";

  renderInfo = () => {
    return (
      <p>
        Username: {this.username} - lop: {this.lop}
      </p>
    );
  };

  render() {
    return (
      <div>
        <h3 className="title">*RenderingElement</h3>
        <p>
          Username: {this.username} - Lop: {this.lop}
        </p>
        {this.renderInfo()}
      </div>
    );
  }
}
