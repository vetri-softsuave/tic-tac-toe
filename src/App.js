import React from "react";
import Board from "./Components/Board";
import Modal from "./Components/Modal";
import { PositionContextProvider } from "./Components/context/position-context";
import "./App.css";
import Player from "./Components/Player";

const App = () => {
  return (
    <PositionContextProvider>
      <div className="container">
        <h2>tic tac toe</h2>
        <Modal show={true} />
        <Board />
        <Player/>
      </div>
    </PositionContextProvider>
  );
};

export default App;
