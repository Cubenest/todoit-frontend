import React from "react";
import style from "./style.css";
import classNames from "classnames";
export interface TodoItemProps {
    title: React.ReactChild;
    checkBox: React.ReactChild;
    dueDate: React.ReactChild;
    label: React.ReactChild;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const itemStyle = classNames(style.item, "drop-shadow-all");

export const TodoItem: React.FC<TodoItemProps> = ({
    checkBox,
    title,
    label,
    dueDate,
    onClick,
}) => {
    return (
        <div className={itemStyle} onClick={onClick}>
            <div className={style.checkBox}>{checkBox}</div>
            <div className={style.center}>
                <div className={style.title}>{title}</div>
                <div className={style.label}>{label}</div>
            </div>
            <div className={style.duedate}>{dueDate}</div>
        </div>
    );
};
