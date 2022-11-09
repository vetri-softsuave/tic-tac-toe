import React,{useState} from "react";
import Board from "./Components/Board";
import Modal from "./Components/Modal";
import './App.css';

const App = () => {
  const [positions,setPositions] = useState(['','','','','','','','','']);
  return (
    <div className="container">
      <h2>tic tac toe</h2>
      <Modal show={true}/>
      <Board/>
    </div>
  );
};

export default App;
