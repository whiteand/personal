import React from "react";
import Background from "src/components/Background";
import Contacts from "src/components/Contacts/Contacts";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Background />
      <Header />
      <Contacts />
    </div>
  );
}

export default App;
