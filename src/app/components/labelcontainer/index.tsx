import React from "react";
import { Label } from "../common";
import style from "./style.css";

export interface LabelContainerProps {
    items: string[];
}

const COLORS = [
    ["#fffb98", "#ffbe07"],
    ["#8cf200", "#16fd00"],
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
