import React from "react";
import { Label } from "../common";
import style from "./style.css";

export interface LabelContainerProps {
    items: string[];
}

const COLORS = [
    ["#50eea0", "#8BC34A"],
    ["#50eea0", "#1a99ff"],
    ["#00b4f1", "#00e8fe"],
];
export const LabelContainer: React.FC<LabelContainerProps> = ({ items }) => {
    return (
        <div className={style.container}>
            {items.map((i: string, index: number) => (
                <Label
                    key={i}
                    titleElement={i}
                    compStyle={style.item}
                    backgroundColor={COLORS[index]}
                />
            ))}
        </div>
    );
};
