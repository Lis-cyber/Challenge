import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";

// Este componente es el principal, el que tiene las rutas para renderizar los componentes
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* Al estar exactamente en la ruta "/", se renderiza el componente Home */}
          <Route exact path="/" component={Home} />
          {/* De la misma manera para Features.js */}
          <Route exact path="/search" component={Features} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;