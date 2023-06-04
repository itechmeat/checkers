import { nanoid } from "nanoid";
import { GameBoardChip } from "./types";

export const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
] as const;

export const SQUARES_LIST = LETTERS.map((_, index) =>
  LETTERS.map((lrt) => `${lrt}${index + 1}` as const)
).flat();

export const ownGameChis = [
  "A1",
  "C1",
  "E1",
  "G1",
  "I1",
  "B2",
  "D2",
  "F2",
  "H2",
  "J2",
  "A3",
  "C3",
  "E3",
  "G3",
  "I3",
];

export const rivalGameChis = [
  "B10",
  "D10",
  "F10",
  "H10",
  "J10",
  "A9",
  "C9",
  "E9",
  "G9",
  "I9",
  "B8",
  "D8",
  "F8",
  "H8",
  "J8",
];

export const STARTED_CHIPS: GameBoardChip[] = [
  ...ownGameChis.map((name) => ({
    id: nanoid(10),
    name,
    history: [name],
    isOwn: true,
  })),
  ...rivalGameChis.map((name) => ({
    id: nanoid(10),
    name,
    history: [name],
    isOwn: false,
  })),
];
