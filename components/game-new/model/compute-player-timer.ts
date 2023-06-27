import { GameStateType } from "./game-reducer";
import { SymbolType } from "../constants";

export function computePlayerTimer(
  gameState: GameStateType,
  playerSymbol: SymbolType,
  winnerSymbol: SymbolType
) {
  const { currentMove, currentMoveStart, timers } = gameState;
  return {
    timer: timers[playerSymbol],
    timerStartAt:
      currentMove === playerSymbol && !winnerSymbol
        ? currentMoveStart
        : undefined,
  };
}
