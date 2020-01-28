import React from "react";
import "./App.css";
import Routes from "./Components/Route/Routes";
function App() {
  return (
    <div className="App">
      <h1 className="bg-primary text-white mb-3 p-2">
        Ticket Management System
      </h1>
      <Routes />
    </div>
  );
}

export default App;
