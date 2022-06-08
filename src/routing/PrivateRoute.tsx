import React from "react";
import {
  IndexRouteProps,
  LayoutRouteProps,
  PathRouteProps,
  Route,
} from "react-router-dom";

export interface RouterProps {
  Layout: React.FC<any>;
  Component: React.FC<any>;
}

const PrivateRoute: React.FC<RouterProps> = ({
  Layout,
  Component,
  ...rest
}) => {
  ///{routeProps.element}
  if (Layout) {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  }

  return <Component />;
};

export default PrivateRoute;
