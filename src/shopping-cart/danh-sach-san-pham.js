import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderHTML = () => {
    return this.props.listProduct.map(sanPham => {
      return (
        <SanPham
          key={sanPham.maSP}
          product={sanPham}
          detailProduct={this.props.detailProduct}
          gioHang={this.props.gioHang}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}
