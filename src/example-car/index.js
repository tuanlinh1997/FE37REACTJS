import React, { Component } from "react";

export default class ExampleCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgRedCar.jpg"
    };
  }

  changeColor = color => {
    let img = "";
    switch (color) {
      case "red":
        img = "./img/imgRedCar.jpg";
        break;

      case "silver":
        img = "./img/imgSilverCar.jpg";
        break;

      default:
        img = "./img/imgBlackCar.jpg";
        break;
    }

    this.setState({
      img //img: img
    });
  };

  render() {
    return (
      <div>
        <h3 className="title">*ExampleCar</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img className="img-fluid" src={this.state.img} alt="" />
            </div>
            <div className="col-sm-7">
              <button
                className="btn btn-danger mx-2"
                onClick={() => {
                  this.changeColor("red");
                }}
              >
                Red
              </button>
              <button
                className="btn btn-light mx-2"
                onClick={() => {
                  this.changeColor("silver");
                }}
              >
                Silver
              </button>
              <button
                className="btn btn-dark mx-2"
                onClick={() => {
                  this.changeColor("black");
                }}
              >
                Black
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
