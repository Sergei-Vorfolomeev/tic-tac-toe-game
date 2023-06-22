import { Header } from "../components/header";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { useState } from "react";
import { useGameState } from "../components/game/hooks/use-game-state";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const { cells, currentMove, nextMove, onCellClickHandler } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className={"mt-4"}
          currentMove={currentMove}
        />
        <GameField
          playersCount={playersCount}
          className={"mt-6"}
          cells={cells}
          nextMove={nextMove}
          currentMove={currentMove}
          onCellClickHandler={onCellClickHandler}
        />
      </main>
    </div>
  );
}
