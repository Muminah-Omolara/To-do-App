import React from "react";
import Todo from "./Components/Todo";
import Header from "./Components/Header";
import "./App.css";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Header />

      <Todo />
    </div>
  );
}

export default App;
