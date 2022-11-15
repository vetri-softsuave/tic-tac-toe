import PosisitionContext from "./context/position-context";
import React, { useContext } from "react";

const Player = () => {
  const positionCtx = useContext(PosisitionContext);
  return (
    <div>
      <h2>{positionCtx.player ? "'X' Turn" : "'O' Turn"}</h2>
    </div>
  );
};

export default Player;
