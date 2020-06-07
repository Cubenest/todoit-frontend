import React, { useState } from "react";
import classNames from "classnames";
import { Label, LabelIcon } from "../common";
import style from "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export interface EditLabelContainerProps extends LabelContainerProps {
    onAdd: (value: string) => void;
    onRemove: (value: number) => void;
}
export const EditLabelContainer: React.FC<EditLabelContainerProps> = ({
    items,
    onAdd,
    onRemove,
}) => {
    const [toggle, setToggle] = useState(false);

    const InputLabel = ({}) => (
        <input
            type="text"
            autoComplete="off"
            autoFocus={true}
            onBlur={(e) => {
                setToggle(!toggle);
                onAdd(e.target.value);
            }}
            onKeyPress={(e: any) => {
                if (e.key === "Enter") {
                    onAdd(e.target.value);
                } else if (e.key === "Escape") {
                    setToggle(!toggle);
                }
            }}
        />
    );
    const CloseComp = (
        <div
            onClick={(e) => {
                e.stopPropagation();
                setToggle(!toggle);
            }}
        >
            <FontAwesomeIcon icon={["fas", "times-circle"]} />
        </div>
    );
    const RemoveLabelComp: React.FC<{ index: number }> = ({ index }) => (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onRemove(index);
            }}
        >
            <FontAwesomeIcon icon={["fas", "times-circle"]} />
        </div>
    );
    return (
        <div className={classNames(style.container, style.editContainer)}>
            {items.map((i: string, index: number) => (
                <LabelIcon
                    key={index}
                    iconPosition={"right"}
                    labelIcon={<RemoveLabelComp index={index} />}
                    titleElement={i}
                    compStyle={style.item}
                    backgroundColor={COLORS[index]}
                />
            ))}
            {items.length <= 2 && (
                <LabelIcon
                    titleElement={!toggle ? "Add Label" : <InputLabel />}
                    iconPosition={"right"}
                    labelIcon={
                        toggle ? (
                            CloseComp
                        ) : (
                            <FontAwesomeIcon icon={["fas", "plus-circle"]} />
                        )
                    }
                    compStyle={style.item}
                    backgroundColor={COLORS[items.length]}
                    onClick={(e) => !toggle && setToggle(!toggle)}
                />
            )}
        </div>
    );
};
