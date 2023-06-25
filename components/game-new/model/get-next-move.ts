import { MOVE_ORDER, SymbolType } from "../constants";

export function getNextMove(
  currentMove: SymbolType,
  playersCount: number,
  playersTimeOver: SymbolType[]
): SymbolType {
  const slicedMovedOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol)
  );
  const nextMoveIndex = slicedMovedOrder.indexOf(currentMove) + 1;
  return slicedMovedOrder[nextMoveIndex] ?? slicedMovedOrder[0];
}
