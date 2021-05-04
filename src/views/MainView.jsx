import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import React from "react";

function MainView() {
  return (
    <div className="wrapper">
      <div className="box header">
        <Header></Header>
      </div>
      <div className="content">
        <Cards></Cards>
      </div>
      <div className="box footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MainView;
