import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ListScreen } from "./screens/ListScreen";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path="/"
          component={ListScreen}
        />
      </Switch>
    </Router>
  );
};
