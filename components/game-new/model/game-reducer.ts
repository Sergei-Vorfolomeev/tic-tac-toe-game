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
  currentMoveStart,
  playersCount,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

// reducer
export const gameReducer = (
  state: GameStateType,
  action: ActionsType
): GameStateType => {
  switch (action.type) {
    case "CELL_CLICK": {
      const { cellIndex, now } = action;
      if (state.cells[cellIndex]) return state;
      return {
        ...state,
        cells: updateCells(state, cellIndex),
        currentMove: getNextMove(state),
        currentMoveStart: now,
        timers: updateTimers(state, now),
      };
    }
    case "TICK": {
      const { now } = action;
      if (!isTimeOver(state, now)) {
        return state;
      }
      return {
        ...state,
        currentMove: getNextMove(state),
        currentMoveStart: now,
        timers: updateTimers(state, now),
      };
    }
    default: {
      return state;
    }
  }
};

function updateCells(gameState: GameStateType, cellIndex: number) {
  return gameState.cells.map((cell, index) =>
    index === cellIndex ? gameState.currentMove : cell
  );
}
function updateTimers(gameState: GameStateType, now: number) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];
  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  };
}
function isTimeOver(gameState: GameStateType, now: number) {
  const timer = updateTimers(gameState, now)[gameState.currentMove];
  return timer <= 0;
}

// actions
export const cellClickAction = (cellIndex: number) => {
  return {
    type: "CELL_CLICK",
    cellIndex,
    now: Date.now(),
  } as const;
};
export const tickAction = () => {
  return {
    type: "TICK",
    now: Date.now(),
  } as const;
};

// action types
export type ActionsType = CellClickActionType | TickActionType;
export type CellClickActionType = ReturnType<typeof cellClickAction>;
export type TickActionType = ReturnType<typeof tickAction>;
