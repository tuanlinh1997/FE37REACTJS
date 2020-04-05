import * as ActionType from "./../constants/ActionType";
import Axios from "axios";


export const actLoginAdminAPI = (user, history) =>{
  return dispatch =>{
    Axios({
      method:"POST",
      url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user
    })
    .then(rs =>{
      console.log(rs.data);
      if(rs.data.maLoaiNguoiDung === "QuanTri"){
        localStorage.setItem("userAdmin", JSON.stringify(rs.data));
        history.push("/admin/dashboard");
      }else{
        alert("không có quyền truy cập");
      }
      
    })
    .catch(err => {
      alert(err.response.data)
      
    })
  }
}


export const actGetDetailMovieAPI = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    })
      .then(rs => {
        dispatch(actGetDetailMovie(rs.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListMovieAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    })
      .then(rs => {
        dispatch(actGetListMovie(rs.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListMovie = listMovie => {
  return {
    type: ActionType.GET_LIST_MOVIE,
    data: listMovie
  };
};

export const actGetDetailMovie = detailMovie => {
  return {
    type: ActionType.GET_DETAIL_MOVIE,
    data: detailMovie
  };
};
