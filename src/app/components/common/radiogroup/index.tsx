import React from "react";
import classNames from "classnames";
import style from "./style.css";

export interface RadioGroupProps {
    items: string[];
    onchange: (value: string) => void;
    selected: number;
    activeStyle?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    items,
    onchange,
    selected,
    activeStyle,
}) => {
    let childrenComp = items.map((i, index) => (
        <button
            key={index}
            type="button"
            className={
                (classNames(style.button),
                selected === index
                    ? activeStyle
                        ? activeStyle
                        : style.active
                    : "")
            }
            onClick={(e) => onchange(i)}
        >
            {i}
        </button>
    ));
    return <div className={style.radioGroup}>{childrenComp}</div>;
};
