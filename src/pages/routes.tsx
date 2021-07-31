import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTE } from "../configs/constants/constant";
import CardPage from "./Login/container/index";

const BaseRoute: React.FC = (props) => {
  const routes = [
    {
      path: ROUTE.landingPage,
      exact: true,
      component: CardPage,
    },
  ];

  const renderRoutes = () => {
    return routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
          {...props}
        />
      );
    });
  };

  return (
    <>
      <Switch>{renderRoutes()}</Switch>
    </>
  );
};

export default BaseRoute;
