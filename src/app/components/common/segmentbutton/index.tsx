import * as React from "react";
import style from "./style.css";
import classNames from "classnames";
import { PureLabel } from "../purelabel";

interface SegmentButtonProps {
    title?: React.ReactChild;
    count?: number;
    isSelected: boolean;
    compStyle?: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const SegmentButton: React.FC<SegmentButtonProps> = ({
    title,
    count,
    isSelected,
    compStyle,
    onClick,
}) => {
    const styleTitle = classNames(
        style.title,
        isSelected ? style.selectedText : style.notSelectedText
    );
    const styleCount = classNames(
        style.count,
        isSelected ? style.selectedText : style.notSelectedText
    );
    const styleContainerTitle = classNames(
        compStyle,
        isSelected ? style.selected : style.notSelected
    );

    return (
        <PureLabel
            centreElement={<div className={styleTitle}>{title}</div>}
            rightElement={<div className={styleCount}>{count}</div>}
            onClick={onClick}
            compStyle={styleContainerTitle}
            borderRadius={30}
        />
    );
};
