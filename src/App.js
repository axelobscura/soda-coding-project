import React, { Component } from "react";
import data from "./data/example.json";
import Grid from "./component/Grid";
import "./App.css";

const losDatos = [];

const eldato = data.data.state.map(ely => {
  losDatos.push(ely);
});

class App extends Component {

  render() {
    console.log(typeof (losDatos));
    return (
      <div className="App">
        <h1>CODING PROJECT</h1>
        {losDatos.map(cdato => (
          <div className="contenedor"><Grid datos={cdato} /></div>
        ))}
      </div>
    );
  }
}

export default App;
