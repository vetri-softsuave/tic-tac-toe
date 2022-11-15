import React, { useState, useContext } from "react";
import PosisitionContext from "./context/position-context";
import "./Modal.css";

const Modal = (props) => {
  const positionCtx = useContext(PosisitionContext);
  const [showModal, setShowModal] = useState(props.show);
  const hideModule = (event) => {
    if(positionCtx.gameStatus){
      window.location.reload(true);
    }
    setShowModal(false);
  };
  let content = "Click to start the game";
  let buttonContent = 'Click Here'
  if (positionCtx.gameStatus) {
    switch (positionCtx.gameStatus) {
      case "X":
        content = "X WON!";
        break;
      case "O":
        content = "O WON!";
        break;
      default:
        content = "MATCH DRAW!";
    }
    buttonContent = 'Restart'
  }
  return (
    <div
      className="modal"
      style={{ visibility: showModal ? "visible" : "hidden" }}
    >
      <div className="overlay">
        <div className="modal-content">
          <h2>{content}</h2>
          <button className="start" onClick={hideModule}>
            {buttonContent}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
