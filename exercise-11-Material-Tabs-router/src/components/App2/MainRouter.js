import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DashBoard from "./DashBoard";
import Favorite from "./Favorite";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/favorite" exact component={Favorite} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};

export default MainRouter;
