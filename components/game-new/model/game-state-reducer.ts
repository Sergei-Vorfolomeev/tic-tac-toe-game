import { CROSS, MOVE_ORDER, SymbolType } from "../constants";
import { getNextMove } from "./get-next-move";

export type GameStateType = {
  cells: SymbolType[];
  currentMove: SymbolType;
  currentMoveStart: number;
  playersCount: number;
  timers: {};
};

// init function
export const initGameState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}): GameStateType => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: CROSS,
  currentMoveStart: currentMoveStart,
  playersCount: playersCount,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

// reducer
export const gameStateReducer = (
  state: GameStateType,
  action: ActionsType
): GameStateType => {
  switch (action.type) {
    case "CELL_CLICK": {
      const { cellIndex, now } = action;
      if (state.cells[cellIndex]) return state;
      return {
        ...state,
        cells: state.cells.map((cell, index) =>
          index === cellIndex ? state.currentMove : cell
        ),
        currentMove: getNextMove(state.currentMove, state.playersCount),
        currentMoveStart: now,
      };
    }
    default: {
      return state;
    }
  }
};

// actions
export const cellClickAction = (cellIndex: number) => {
  return {
    type: "CELL_CLICK",
    cellIndex,
    now: Date.now(),
  } as const;
};

// action types
export type ActionsType = CellClickActionType;
export type CellClickActionType = ReturnType<typeof cellClickAction>;
