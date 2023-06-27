import { SymbolType } from "../constants";
import { GameStateType } from "./game-reducer";

export function computeWinnerSymbol(
  gameState: GameStateType,
  nextMove: SymbolType,
  winnerSequence: number[]
): SymbolType {
  const { currentMove, cells } = gameState;
  return currentMove === nextMove ? currentMove : cells[winnerSequence?.[0]];
}
