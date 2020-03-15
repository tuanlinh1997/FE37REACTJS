import React from "react";
import "./App.css";
// import Baitap1 from "./baitap1";
// import Baitap2 from "./baitap2";
import RenderingElement from "./rendering-element";
import HandlingEvent from "./handling-event";
import ExampleEvent from "./handling-event/example-event";
import State from "./state";
import ExampleCar from "./example-car";
import ListKey from "./list-key";
import ExampleListKey from "./list-key/example";
import Props from "./props";
import BaitapProps from "./bai-tap-props";
import ShoppingCart from "./shopping-cart";
import Home from "./user-management/Home";
import HomeRedux from "./user-management-redux/Home";

function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      <RenderingElement />
      <hr />
      <HandlingEvent />
      <hr />
      <ExampleEvent />
      <hr />
      <State />
      <hr />
      <ExampleCar />
      <hr />
      <ListKey />
      <hr />
      <ExampleListKey />
      <hr />
      <Props />
      <hr />
      <BaitapProps />
      <hr />
      <ShoppingCart />
      <hr />
      <Home />
      <hr />
      <HomeRedux />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
