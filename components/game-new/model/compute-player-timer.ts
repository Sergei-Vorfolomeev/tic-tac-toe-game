import { GameStateType } from "./game-state-reducer";
import { SymbolType } from "../constants";

export function computePlayerTimer(
  gameState: GameStateType,
  playerSymbol: SymbolType
) {
  const { currentMove, currentMoveStart, timers } = gameState;
  return {
    timer: timers[playerSymbol],
    timerStartAt: currentMove === playerSymbol ? currentMoveStart : undefined,
  };
}
