import React, { useContext } from "react";
import Box from "./Box";
import "./Board.css";
import PosisitionContext from "./context/position-context";
import Modal from "./Modal";

const Board = () => {
  const positionCtx = useContext(PosisitionContext);

  return (
    <>
      <div className="game-board">
        {positionCtx.positions.map((item, i) => {
          return <Box key={i} pos={i} symbol={item}></Box>;
        })}
      </div>
      { positionCtx.gameStatus && <Modal show={true}/>}
    </>
  );
};
export default Board;
