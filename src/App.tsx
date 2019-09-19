import React from "react";

//React router dom
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import Login from "./Components/auth/Login";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
