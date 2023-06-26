import { MOVE_ORDER, SymbolType } from "../constants";

export function getNextMove(
  currentMove: SymbolType,
  playersCount: number
): SymbolType {
  // debugger;
  const slicedMovedOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedMovedOrder.indexOf(currentMove) + 1;
  return slicedMovedOrder[nextMoveIndex] ?? slicedMovedOrder[0];
}
