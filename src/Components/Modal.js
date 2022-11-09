import React,{useState} from "react";
import "./Modal.css";

const Modal = (props) => {

    const [showModal, setShowModal] = useState(props.show);
    const hideModule = (event) =>{
        setShowModal(false);
        
    }

  return (
    <div className="modal" style={{visibility: showModal? 'visible':'hidden'}}>
      <div className="overlay">
        <div className="modal-content">
          <h2>Click to start the game</h2>
          <button className="start" onClick={hideModule}>Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
