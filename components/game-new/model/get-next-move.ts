import { MOVE_ORDER, SymbolType } from "../constants";
import { GameStateType } from "./game-reducer";

export function getNextMove({
  currentMove,
  playersCount,
  timers,
}: GameStateType): SymbolType {
  const slicedMovedOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => timers[symbol] > 0
  );
  const nextMoveIndex = slicedMovedOrder.indexOf(currentMove) + 1;
  return slicedMovedOrder[nextMoveIndex] ?? slicedMovedOrder[0];
}
