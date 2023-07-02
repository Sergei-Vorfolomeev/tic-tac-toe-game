export type SymbolType = "circle" | "cross" | "triangle" | "square" | null;

export const { CIRCLE, CROSS, SQUARE, TRIANGLE } = {
  CIRCLE: "circle" as SymbolType,
  CROSS: "cross" as SymbolType,
  TRIANGLE: "triangle" as SymbolType,
  SQUARE: "square" as SymbolType,
};

export const MOVE_ORDER: SymbolType[] = [CROSS, CIRCLE, TRIANGLE, SQUARE];
