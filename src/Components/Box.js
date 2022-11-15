import React, { useContext } from "react";
import PosisitionContext from "./context/position-context";
import "./Box.css";

const Box = (props) => {
  const positionCtx = useContext(PosisitionContext);

  const setBoxAsSelected = () => {
    let selects = positionCtx.selected;
    selects[props.pos] = true;
    positionCtx.setSelected(selects);
    positionCtx.setPlayer((prev) => !prev);
  };

  const updateSymbol = () => {
    let positions = positionCtx.positions;
    positions[props.pos] = positionCtx.player ? "X" : "O";
    positionCtx.setPositions(positions);
  };

  const checkGameStatus = (player) => {
    console.log(player);
    let board = positionCtx.positions;
    if (
      (board[0] === board[1] && board[0] === board[2] && board[0] === player) ||
      (board[3] === board[4] && board[3] === board[5] && board[3] === player) ||
      (board[6] === board[7] && board[6] === board[8] && board[6] === player) ||
      (board[0] === board[3] && board[0] === board[6] && board[0] === player) ||
      (board[1] === board[4] && board[1] === board[7] && board[1] === player) ||
      (board[2] === board[5] && board[2] === board[8] && board[2] === player) ||
      (board[0] === board[4] && board[0] === board[8] && board[0] === player) ||
      (board[2] === board[4] && board[2] === board[6] && board[2] === player) 
    ) {
      console.log("correct logic");
      positionCtx.setGameStatus(player);
    }
    else{
        if(positionCtx.clicks >= 8){
            console.log('match draw');
            positionCtx.setGameStatus('DRAW');
        }
    }
    console.log(positionCtx.clicks);
  };

//   const setResults = () =>{
//         switch(positionCtx.gameStatus){
//             case 'X':

//         }
//   }

  const clickHandler = (event) => {
    if (positionCtx.selected[props.pos]) {
      alert("already selected! please select another");
      return;
    }
    if(positionCtx.gameStatus){
        console.log("heklojn");
    }
    setBoxAsSelected();
    updateSymbol();
    positionCtx.setClicks((pre) => pre + 1);
    checkGameStatus(positionCtx.player ? "X" : "O");
    
  };

  return (
    <div className="box" onClick={clickHandler}>
      {props.symbol}
    </div>
  );
};

export default Box;
