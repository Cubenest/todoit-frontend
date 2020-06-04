import React from "react";
import customStyle from "./style.css";
import classNames from "classnames";
export interface TodoItemProps {
    title: React.ReactChild;
    checkBox: React.ReactChild;
    dueDate: React.ReactChild;
    label: React.ReactChild;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    style?: any;
    additionalStyle: String;
}

export const TodoItem: React.FC<TodoItemProps> = ({
    checkBox,
    title,
    label,
    dueDate,
    onClick,
    style,
    additionalStyle,
}) => {
    const itemStyle = classNames(additionalStyle, "drop-shadow-all");

    return (
        <div style={style} className={itemStyle} onClick={onClick}>
            <div className={customStyle.checkBox}>{checkBox}</div>
            <div className={customStyle.center}>
                <div className={customStyle.title}>{title}</div>
                <div className={customStyle.label}>{label}</div>
            </div>
            <div className={customStyle.duedate}>{dueDate}</div>
        </div>
    );
};
