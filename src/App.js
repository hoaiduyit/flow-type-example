// @flow
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BasicType } from "./components/examples";

class App extends React.Component<*> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <BasicType />
        </div>
      </div>
    );
  }
}

export default App;
