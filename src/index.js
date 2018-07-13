import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store";
import { App } from "./components/App";
import { StartGame } from "./components/StartGame";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartGame} />
        <Route path="/game" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  rootElement
);
