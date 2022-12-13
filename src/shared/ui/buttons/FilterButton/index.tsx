import React, { FC } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../../assets/icons/arrows";

interface FilterButtonProps {
  label: string;
  classes: string;
  onClick: (e: React.MouseEvent) => void;
  isOpen: boolean;
}

const FilterButton: FC<FilterButtonProps> = ({
  label,
  isOpen,
  classes,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={classes}>
      <p>{label}</p> {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </div>
  );
};

export default FilterButton;
