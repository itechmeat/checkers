import { LETTERS, SQUARES_LIST } from "./constants";

export type GameBoardSize = 64 | 100;

export type GameBoardLetters = (typeof LETTERS)[number];

export type GameBoardSquares = (typeof SQUARES_LIST)[number];

export type GameBoardChip = {
  id: string;
  name: string;
  history: string[];
  isOwn: boolean;
};

export type GameBoardChipMap = Map<string, GameBoardChip>;
