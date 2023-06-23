import { MOVE_ORDER, SymbolType } from "./constants";

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

export function computeWinner(
  cells: SymbolType[],
  sequenceSize: number = 5,
  fieldSize: number = 19
) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes: number[]) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return result;
  }

  function getSequenceIndexes(i: number) {
    const res = [
      [], // –
      [], // \
      [], // /
      [], // |
    ];
    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j - gap + i);
      res[1].push(fieldSize * (j - gap) + (j - gap) + i);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      res[3].push(fieldSize * (j - gap) + i);
    }

    const x = i % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));

      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
}
