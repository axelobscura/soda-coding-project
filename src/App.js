import React, { useState } from "react";
import data from "./data/example.json";
import Boton from "./component/Boton";
import Grid from "./component/Grid";
import "./App.css";

const losDatos = [];

const eldato = data.data.state.map(ely => {
  losDatos.push(ely);
});

function App() {
  const [count, setCount] = useState(0);
  const [textoBoton, setTextoBoton] = useState("START");
  const sum = () => {
    setCount(count + 1);
    setTextoBoton("PAUSE")
  }
  return (
    <div className="App">
      <h1>CODING PROJECT {count}</h1>
      <Boton texto={textoBoton} sumar={sum} />
      {losDatos.map((cdato, index) => (
        <div className="contenedor" key={index}><Grid datos={cdato} /></div>
      ))}
    </div>
  );
}

export default App;
