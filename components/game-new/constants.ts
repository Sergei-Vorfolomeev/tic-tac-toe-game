import { PlayerType } from "./ui/player-info";

export type SymbolType = "circle" | "cross" | "triangle" | "square" | null;

export const { CIRCLE, CROSS, SQUARE, TRIANGLE } = {
  CIRCLE: "circle" as SymbolType,
  CROSS: "cross" as SymbolType,
  TRIANGLE: "triangle" as SymbolType,
  SQUARE: "square" as SymbolType,
};

export const MOVE_ORDER: SymbolType[] = [CROSS, CIRCLE, TRIANGLE, SQUARE];

const avatarDefault = require("../profile/avatar.png") as string;
const avatarSrc1 = require("./ui/avatar-1.png") as string;
const avatarSrc2 = require("./ui/avatar-2.png") as string;
const avatarSrc3 = require("./ui/avatar-3.png") as string;

export const PLAYERS: PlayerType[] = [
  {
    id: 1,
    name: "SergeyV",
    rating: 1230,
    avatar: avatarDefault,
    symbol: CROSS,
  },
  {
    id: 2,
    name: "Always happyyyyyyyyyyyyyyy",
    rating: 867,
    avatar: avatarSrc1,
    symbol: CIRCLE,
  },
  {
    id: 3,
    name: "Unforgotten",
    rating: 938,
    avatar: avatarSrc2,
    symbol: TRIANGLE,
  },
  {
    id: 4,
    name: "Lara",
    rating: 1106,
    avatar: avatarSrc3,
    symbol: SQUARE,
  },
];
