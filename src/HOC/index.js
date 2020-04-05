import React, { Component } from "react";
import FromNhanVien from "./FormNhanVien";
// import FromSanPham from "./FormSanPham";
import WithModal from "./WithModal";

const FormModal = WithModal(FromNhanVien);

export default class HOC extends Component {
  render() {
    return (
      <div>
        <h3>HOC</h3>
        <FormModal />
      </div>
    );
  }
}
