import React from "react";
import style from "./style.css";
import { SegmentButton } from "../common";

export interface SegmentContainerProps {
    items: { label: string; count: number }[];
    selectedIndex: number;
    onChange: (
        ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => void;
}

export const SegmentContainer: React.FC<SegmentContainerProps> = ({
    items,
    selectedIndex,
    onChange,
}) => {
    return (
        <div className={style.container}>
            {items.map((i, index) => (
                <SegmentButton
                    key={index}
                    isSelected={index === selectedIndex}
                    title={i.label}
                    count={i.count}
                    compStyle={style.button}
                    onClick={(e) => onChange(e, index)}
                />
            ))}
        </div>
    );
};
