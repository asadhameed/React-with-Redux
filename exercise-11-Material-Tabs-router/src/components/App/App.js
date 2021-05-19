import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter,
  Link as LinkRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Dash from "./DashBoard";
import Favorite from "./Favorite";

const App = () => {
  const router = ["/", "/favorite", "*"];
  return (
    <div>
      <BrowserRouter>
        <Route
          path="/"
          render={({ history }) => (
            <Tabs value={history.location.pathname}>
              <Tab
                label="Home"
                value={router[0]}
                component={LinkRouter}
                to={router[0]}
              ></Tab>
              <Tab
                label="Favorite"
                value={router[1]}
                component={LinkRouter}
                to={router[1]}
              ></Tab>
            </Tabs>
          )}
        ></Route>
        <Switch>
          <Route path="/" exact component={Dash}></Route>
          <Route path="/favorite" exact component={Favorite} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
