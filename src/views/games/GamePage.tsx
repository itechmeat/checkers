import { FC, useEffect, useState } from "react";
import { GameBoard } from "../../features/checkersBoard/GameBoard/GameBoard";
import { STARTED_CHIPS } from "../../features/checkersBoard/constants";

export const GamePage: FC = () => {
  const [lastTime, setLastTime] = useState<number>();

  const handleMove = (chipId: string, squareName: string) => {
    const time = new Date().getTime();
    setLastTime(time);
    console.log(chipId, squareName, time);
  };

  useEffect(() => {
    const time = new Date().getTime();
    setLastTime(time);
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "30px auto" }}>
      <GameBoard
        chips={STARTED_CHIPS}
        squares={100}
        turnTime={lastTime}
        onMove={handleMove}
      />
    </div>
  );
};
