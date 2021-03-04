import React from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Lista from "./components/Lista";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertState, setAlertState] = useState(false);

  return (
    <div className="App">
      <Avatar />
      <Lista />
      <button
        className="alert-button"
        onClick={() => setAlertState(!alertState)}
      >
        Termos
      </button>
      <Alert message="Você deve aceitar os termos!" show={alertState} />
    </div>
  );
}

export default App;
