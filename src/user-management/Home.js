import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      userEdit: null,
      keyword: ""
    };
  }

  /**
   * Tim Vi Tri
   */
  timViTri = id => {
    return this.state.userList.findIndex(user => {
      return user.id === id;
    });
  };

  /**
   * DELETE
   */
  handleDelete = user => {
    let userList = [...this.state.userList];
    let index = this.timViTri(user.id);
    if (index !== -1) {
      userList.splice(index, 1);

      this.setState({
        userList
      });
    }
  };

  /**
   * Submit (Add/Update)
   */
  handleSubmit = user => {
    if (user.id) {
      //UPDATE
      /**
       * 0. Tim vi tri index
       * 1. userList[index] = user;
       */
      let userList = [...this.state.userList];
      let index = this.timViTri(user.id);
      if (index !== -1) {
        userList[index] = user;

        this.setState({
          userList,
          userEdit: user
        });
      }
    } else {
      //ADD
      let userAdd = { ...user, id: Math.random() };
      let userList = [...this.state.userList, userAdd];

      this.setState({
        userList
      });
    }
  };

  handleGetUserEdit = user => {
    this.setState({
      userEdit: user
    });
  };

  /**
   * Keyword
   */
  handleKeyword = keyword => {
    this.setState({
      keyword
    });
  };

  render() {
    let { userList, keyword } = this.state;
    userList = userList.filter(user => {
      return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search keyword={this.handleKeyword} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          userList={userList}
          delete={this.handleDelete}
          getUserEdit={this.handleGetUserEdit}
        />
        <Modal submit={this.handleSubmit} userEdit={this.state.userEdit} />
      </div>
    );
  }
}

export default Home;
