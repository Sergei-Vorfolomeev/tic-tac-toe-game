import { CROSS, SymbolType } from "../constants";
import { getNextMove } from "./get-next-move";

export type GameStateType = {
  cells: SymbolType[];
  currentMove: SymbolType;
  playersCount: number;
};

// init function
export const initGameState = ({ playersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: CROSS,
  playersCount: playersCount,
});

// reducer
export const gameStateReducer = (
  state: GameStateType,
  action: ActionsType
): GameStateType => {
  switch (action.type) {
    case "CELL_CLICK": {
      const { cellIndex } = action;
      if (state.cells[cellIndex]) return state;
      return {
        ...state,
        cells: state.cells.map((cell, index) =>
          index === cellIndex ? state.currentMove : cell
        ),
        currentMove: getNextMove(state.currentMove, state.playersCount),
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
  } as const;
};

// action types
type ActionsType = CellClickActionType;
export type CellClickActionType = ReturnType<typeof cellClickAction>;
