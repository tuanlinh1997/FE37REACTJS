import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: ""
      },
      errors: {
        manv: "",
        tennv: "",
        email: ""
      },
      formValid: false,
      manvValid: false,
      tennvValid: false,
      emailValid: false
    };
  }

  handleOnChange = event => {
    let { name, value } = event.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value }
      },
      () => {
        console.log(this.state);
      }
    );

    console.log(name, value);
  };

  handleErrors = event => {
    let { name, value } = event.target;
    let mess = value === "" ? "Không được bỏ trống" : "";
    let { manvValid, tennvValid, emailValid } = this.state;

    switch (name) {
      case "manv":
        manvValid = mess !== "" ? false : true;
        if(value !== "" && value.length < 4){
            manvValid = false;
            mess = "Mã NV phải lớn hơn 3 ký tự"

        }
        break;
      case "tennv":
        tennvValid = mess !== "" ? false : true;

        break;
      case "email":
        emailValid = mess !== "" ? false : true;
        if(value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            emailValid = false;
            mess = "Email không đúng định dạng"
        }
        break;

      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid
      },
      () => {
        this.formValidation();
      }
    );
    // if(value === ""){
    //     mess = "Không được bỏ trống";
    // }else{
    //     mess = "";
    // }
  };

  formValidation = () => {
    let { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid,
      
    });
  };

  render() {
    return (
      <div className="container">
        <h3>* Form Validation</h3>
        <form>
          <div className="form-group">
            <label>Mã Nhân Viên</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnChange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.manv !== "" ? (
              <p className="alert alert-danger">Mã {this.state.errors.manv}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Tên Nhân Viên</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnChange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.tennv !== "" ? (
              <p className="alert alert-danger">
                Tên {this.state.errors.tennv}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnChange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.email !== "" ? (
              <p className="alert alert-danger">
                Email {this.state.errors.email}
              </p>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
