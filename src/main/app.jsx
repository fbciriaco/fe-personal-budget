import React from "react";
import "../common/template/dependencies";
import Routes from "./routes";

import Footer from "../common/template/footer";
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
        <Routes />
    </div>
    <Footer />
  </div>
);
