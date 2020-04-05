import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./pages/home/Home";
// import About from "./pages/home/About";
// import ListMovie from "./pages/home/ListMovie";

import PageNotFound from "./pages/PageNotFound";
import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";
import Admin from "./pages/admin/Admin";


function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
 
  const showMenuAdmin = routes => {
    if (routes && routes.length >0){
      return routes.map((item,index) =>{
        return (
          <AdminTemplate 
             key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        )
      })
        
    }
  }
  return (
    <BrowserRouter>
      <div>
        
        <Switch>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}

          <Route exact={false} path= "/admin" component={Admin} />


          {/* Trang chu - localhost:3000 */}
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/home" component={Home} /> */}
          {/* Trang about - localhost:3000/about */}
          {/* <Route path="/about" component={About} /> */}
          {/* Trang ListMovie - localhost:3000/list-movie */}
          {/* <Route path="/list-movie" component={ListMovie} /> */}

          {/* Trang Khong Co */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
