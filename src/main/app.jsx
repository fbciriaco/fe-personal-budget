import React from "react";
import "../common/template/dependencies";
import Routes from "./routes";

import Footer from "../common/template/footer";
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Messages from "../common/msg/messages";

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
        <Routes />
    </div>
    <Footer />
    <Messages />
  </div>
);
