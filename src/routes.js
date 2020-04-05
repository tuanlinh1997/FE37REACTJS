import Home from "./pages/home/Home";
import About from "./pages/home/About";
import ListMovie from "./pages/home/ListMovie";
import DetailMovie from "./pages/home/DetailMovie";
import HOC from "./HOC";
import Dashboard from "./pages/admin/Dashboard";
import ThemNguoiDung from "./pages/admin/ThemNguoiDung";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    exact: false,
    component: Home
  },
  {
    path: "/about",
    exact: false,
    component: About
  },
  {
    path: "/list-movie",
    exact: false,
    component: ListMovie
  },
  {
    path: "/detail-movie/:id",
    exact: false,
    component: DetailMovie
  },
  {
    path: "/hoc",
    exact: false,
    component: HOC
  }
];

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: Dashboard
  },
  {
    path: "/admin/them-nguoi-dung",
    exact: false,
    component: ThemNguoiDung
  }
];

export { routesHome, routesAdmin };
