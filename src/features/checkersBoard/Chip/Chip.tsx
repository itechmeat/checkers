import { FC, useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import cn from "classnames";
import { buildSqrtId } from "../utils";
import { GameBoardChip } from "../types";
import styles from "./Chip.module.scss";

type Position = {
  x: number;
  y: number;
};

type ChipProps = {
  value: GameBoardChip;
  isSelected?: boolean;
  hasCoin?: boolean;
};

export const Chip: FC<ChipProps> = ({ value, isSelected, hasCoin }) => {
  const [rect, setRect] = useState<Position | null>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    const sqrt = document.getElementById(buildSqrtId(value.name));
    if (sqrt) {
      setRect({ x: sqrt?.offsetLeft, y: sqrt?.offsetTop });
    }
  }, [value.name, width]);

  const style = {
    top: rect?.y,
    left: rect?.x,
  };

  return (
    <div
      className={cn(styles.chip, {
        [styles.own]: value.isOwn,
        [styles.selected]: isSelected,
      })}
      data-chip={value.name}
      style={style}
    >
      <div className={styles.name}>{value.name}</div>
      {hasCoin && <div className={styles.coin} />}
    </div>
  );
};
