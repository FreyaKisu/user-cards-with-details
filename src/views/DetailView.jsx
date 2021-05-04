import Header from "../components/Header";
import Footer from "../components/Footer";
import Details from "../components/Details";
import React from "react";

function DetailView() {
  return (
    <div className="wrapper">
      <div className="box header">
        <Header></Header>
      </div>
      <div className="content">
        <Details></Details>
      </div>
      <div className="box footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default DetailView;
