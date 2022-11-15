import React, { useState } from "react";

const PosisitionContext = React.createContext({});

export const PositionContextProvider = (props) => {
  const [positions, setPositions] = useState([
    " ",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [player, setPlayer] = useState(true); //true->X false->O
  const [gameStatus, setGameStatus] = useState("");
  const [clicks, setClicks] = useState(0);
  const [showResults, setShowResults] = useState(false);
  return (
    <PosisitionContext.Provider
      value={{
        positions,
        setPositions,
        player,
        setPlayer,
        selected,
        setSelected,
        gameStatus,
        setGameStatus,
        clicks,
        setClicks,
        showResults,
        setShowResults
      }}
    >
      {props.children}
    </PosisitionContext.Provider>
  );
};
export default PosisitionContext;
