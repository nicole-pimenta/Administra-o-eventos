import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Wedding from "../pages/Wedding";
import Graduation from "../pages/Graduation";
import Confraternization from "../pages/Confraternization";

console.log("route");

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
      <Route path="/confraternization">
        <Confraternization />
      </Route>
      <Route>
        <div> Page not found </div>
      </Route>
    </Switch>
  );
};

export default Routes;
