import React from "react";
import "../common/template/dependencies";

import Footer from "../common/template/footer";
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
        <h1>Content</h1>
    </div>
    <Footer />
  </div>
);
