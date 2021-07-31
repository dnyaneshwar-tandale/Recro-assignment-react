import React from "react";
import AppRoute from "./routes";
import { withRouter } from "react-router-dom";

const Pages: React.FC = (props) => {
  return <AppRoute {...props} />;
};

export default withRouter(Pages);
