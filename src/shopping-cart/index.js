import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";

export default class ShoppingCart extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg"
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg"
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: this.mangSanPham,
      detailProduct: this.mangSanPham[0],
      mangGioHang: []
    };
  }

  handleDetail = product => {
    this.setState({
      detailProduct: product
    });
  };

  /**
   * Tìm vị trí
   */
  timViTri = id => {
    return this.state.mangGioHang.findIndex(sanPham => {
      return sanPham.maSP === id;
    });
  };

  /**
   * Thêm giỏ hàng
   */
  handleGioHang = product => {
    const addProduct = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      soLuong: 1,
      giaBan: product.giaBan
    };

    /**
     * 0. Tìm vị trí findIndex()
     * 1. Nếu index !== -1 => Tìm thấy => Update
     * 2. Ngược lại => Không tìm thấy => Add
     */
    let mangGioHang = [...this.state.mangGioHang];
    let index = this.timViTri(addProduct.maSP);

    if (index !== -1) {
      //Update
      mangGioHang[index].soLuong += 1;
    } else {
      //Add
      mangGioHang = [...this.state.mangGioHang, addProduct];
    }

    this.setState({
      mangGioHang
    });
  };

  /**
   * DELETE
   */
  handleDelete = product => {
    /**
     * 0. Tạo mảng copy từ mảng mangGioHang
     * 1. Tìm vị trí
     * 2. Nếu tìm thấy => Xóa splice(index, 1)
     * 3. Cập nhật state
     */
    let { mangGioHang } = { ...this.state };
    let index = this.timViTri(product.maSP);
    if (index !== -1) {
      mangGioHang.splice(index, 1);
      this.setState({
        mangGioHang
      });
    }
  };

  /**
   * Tang Giam SL
   */
  handleTangGiamSL = (product, status) => {
    let mangGioHang = [...this.state.mangGioHang];
    let index = this.timViTri(product.maSP);

    if (status) {
      //Tang
      mangGioHang[index].soLuong += 1;
    } else {
      //Giam
      if (mangGioHang[index].soLuong > 1) {
        mangGioHang[index].soLuong -= 1;
      }
    }

    this.setState({
      mangGioHang
    });
  };

  /**
   * Tong SL Gio Hang
   */
  tongSL = () => {
    /**
     * 0. Tạo biến tích lũy tong = 0;
     * 1. Duyệt mảng mangGioHang
     * 2. Cộng dồn số lượng vào biến tong;
     * 3. return tong
     */
    // let tong = 0;
    // this.state.mangGioHang.map(sanPham => {
    //   tong += sanPham.soLuong;
    // });
    // return tong;

    return this.state.mangGioHang.reduce((tong, sanPham) => {
      return (tong += sanPham.soLuong);
    }, 0);
  };

  render() {
    const { detailProduct } = this.state;

    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tongSL()})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={this.state.mangSanPham}
          detailProduct={this.handleDetail}
          gioHang={this.handleGioHang}
        />
        <Modal
          gioHang={this.state.mangGioHang}
          delete={this.handleDelete}
          tangGiamSL={this.handleTangGiamSL}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{detailProduct.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{detailProduct.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{detailProduct.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{detailProduct.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{detailProduct.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{detailProduct.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
