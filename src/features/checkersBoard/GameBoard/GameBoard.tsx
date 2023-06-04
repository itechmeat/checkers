import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import cn from "classnames";
import { LETTERS } from "../constants";
import { buildSqrtId } from "../utils";
import { GameBoardChip, GameBoardChipMap, GameBoardSize } from "../types";
import { Chip } from "../Chip/Chip";
import styles from "./GameBoard.module.scss";

type GameBoardProps = PropsWithChildren & {
  squares?: GameBoardSize;
  chips: GameBoardChip[];
  turnTime?: number;
  turnTimeDuration?: number;
  onMove: (chipId: string, squareName: string) => void;
};

export const GameBoard: FC<GameBoardProps> = ({
  chips,
  squares = 64,
  turnTime,
  turnTimeDuration = 10000,
  onMove,
}) => {
  const sqrt = Math.sqrt(squares);
  const usedLetters = LETTERS.slice(0, sqrt);

  const matrix = Array.from({ length: squares }, (_, i) => {
    return `${LETTERS[i % sqrt]}${sqrt - Math.floor(i / sqrt)}`;
  });

  const [ownChipsMap, setOwnChipsMap] = useState<GameBoardChipMap>(new Map());
  const [rivalChipsMap, setRivalChipsMap] = useState<GameBoardChipMap>(
    new Map()
  );
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [isOwnTurn, setIsOwnTurn] = useState<boolean>(false);

  const ownChipsNamesList = [...ownChipsMap.values()].map((item) => item.name);

  const rivalChipsNamesList = [...rivalChipsMap.values()].map(
    (item) => item.name
  );

  const boardStyle = {
    ["--columns-size"]: `${100 / sqrt}%`,
    margin: 0,
  };

  const gridTemplateColumnsStyle = {
    gridTemplateColumns: `repeat(${sqrt}, 1fr)`,
  };

  useEffect(() => {
    if (turnTime) {
      setTimeout(() => {
        setIsOwnTurn(true);
      }, 10);
    }
  }, [turnTime]);

  const HorizontalScale = (props: { className: string }) => {
    return (
      <div
        className={cn(styles.edgeH, props.className)}
        style={gridTemplateColumnsStyle}
      >
        {usedLetters.map((letter) => (
          <div key={letter} className={styles.square}>
            {letter}
          </div>
        ))}
      </div>
    );
  };

  const VerticalScale = (props: { className: string }) => {
    return (
      <div
        className={cn(styles.edgeV, props.className)}
        style={gridTemplateColumnsStyle}
      >
        {usedLetters.map((letter, index) => (
          <div key={letter} className={styles.square}>
            {sqrt - index}
          </div>
        ))}
      </div>
    );
  };

  const convertArrayToMap = (array: GameBoardChip[]): GameBoardChipMap => {
    const result = new Map<string, GameBoardChip>();
    array.forEach((item) => {
      result.set(item.id, item);
    });
    return result;
  };

  useEffect(() => {
    setOwnChipsMap(convertArrayToMap(chips.filter((chip) => chip.isOwn)));
    setRivalChipsMap(convertArrayToMap(chips.filter((chip) => !chip.isOwn)));
  }, [chips]);

  const availableSquares = useMemo(() => {
    if (!selectedChip) return [];
    const index = matrix.indexOf(selectedChip);
    const rightSquare =
      (index + 1) % sqrt === 0 ? undefined : matrix[index + 1];
    const rightTopSquare = !rightSquare ? undefined : matrix[index - sqrt + 1];
    const rightBottomSquare = !rightSquare
      ? undefined
      : matrix[index + sqrt + 1];
    const leftSquare = index % sqrt === 0 ? undefined : matrix[index - 1];
    const leftTopSquare = !leftSquare ? undefined : matrix[index - sqrt - 1];
    const leftBottomSquare = !leftSquare ? undefined : matrix[index + sqrt - 1];
    const topSquare = matrix[index - sqrt];
    const bottomSquare = matrix[index + sqrt];
    const neighbors = {
      rightSquare,
      rightTopSquare,
      rightBottomSquare,
      leftSquare,
      leftTopSquare,
      leftBottomSquare,
      topSquare,
      bottomSquare,
    };
    return Object.values(neighbors)
      .filter(
        (squareName) =>
          squareName &&
          !ownChipsNamesList?.includes(squareName) &&
          !rivalChipsNamesList?.includes(squareName)
      )
      .filter(Boolean);
  }, [selectedChip, matrix, sqrt, ownChipsNamesList, rivalChipsNamesList]);

  const drawChips = (chipsMap: GameBoardChipMap) => {
    if (!chipsMap) return null;
    return [...chipsMap.keys()].map((key) => {
      const chip = chipsMap?.get(key);
      if (chip) {
        return (
          <Chip
            key={chip.id}
            value={chip}
            isSelected={selectedChip === chip.name}
            hasCoin={chip.history.length === 1}
          />
        );
      }
    });
  };

  const handleClick = (squareName: string) => {
    if (availableSquares.includes(squareName) && selectedChip) {
      const chip = [...ownChipsMap.values()].find(
        (item: GameBoardChip) => item.name === selectedChip
      );
      if (chip) {
        chip.name = squareName;
        chip.history.push(squareName);
        setOwnChipsMap(ownChipsMap.set(chip.id, chip));
        setIsOwnTurn(false);
        onMove(chip.id, squareName);
      }
      return setSelectedChip(null);
    }
    if (!ownChipsNamesList?.includes(squareName)) return setSelectedChip(null);
    if (selectedChip === squareName) return setSelectedChip(null);
    setSelectedChip(squareName);
  };

  return (
    <div className={styles.board} style={boardStyle}>
      <HorizontalScale className={styles.edgeT} />
      <VerticalScale className={styles.edgeL} />
      <div className={styles.squares} style={gridTemplateColumnsStyle}>
        {matrix.map((square, index) => (
          <div
            id={buildSqrtId(square)}
            key={square}
            className={cn(styles.square, {
              [styles.squareDark]: (index + Math.floor(index / sqrt)) % 2 === 0,
              [styles.squareClickable]: ownChipsNamesList.includes(square),
              [styles.squareAvailable]: availableSquares.includes(square),
            })}
            onClick={() => handleClick(square)}
          >
            <div className={styles.name}>{square}</div>
          </div>
        ))}
      </div>
      <VerticalScale className={styles.edgeR} />
      <HorizontalScale className={styles.edgeB} />
      <div className={styles.chips} style={boardStyle}>
        {drawChips(ownChipsMap)}
        {drawChips(rivalChipsMap)}
      </div>
      <div
        className={cn(styles.timeline, { [styles.ownTurn]: isOwnTurn })}
        style={{ transitionDuration: turnTimeDuration + "ms" }}
      />
      <div
        className={cn(styles.timeline, styles.timelineRival, {
          [styles.ownTurn]: isOwnTurn,
        })}
        style={{ transitionDuration: turnTimeDuration + "ms" }}
      />
    </div>
  );
};
