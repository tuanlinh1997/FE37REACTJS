import React, { Component } from "react";
import ClassProps from "./classProps";
import FunctionProps from "./functionProps";

export default class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cybersoft"
    };
  }

  handleResetName = name => {
    this.setState({
      name
    });
  };

  render() {
    let component = {
      border: "1px solid black",
      padding: "30px"
    };
    return (
      <div style={component} className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>Name is {this.state.name}</p>
            <hr />
            <div className="row">
              <div className="col-sm-6">
                <ClassProps
                  name={this.state.name}
                  resetName={this.handleResetName}
                />
              </div>
              <div className="col-sm-6">
                <FunctionProps
                  name={this.state.name}
                  resetName={this.handleResetName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
