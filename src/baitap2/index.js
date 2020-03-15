import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import WhatWeDo from "./what-we-do";
import Contact from "./contact";
import Listcard from "./list-card";
import Footer from "./footer";

export default function Baitap2() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="row">
        <WhatWeDo />
        <Contact />
      </div>
      <Listcard />
      <Footer />
    </div>
  );
}
