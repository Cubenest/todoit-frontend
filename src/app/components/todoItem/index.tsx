import React from "react";
import customStyle from "./style.css";
import classNames from "classnames";
export interface TodoItemProps {
    title: React.ReactChild;
    checkBox?: React.ReactChild;
    dueDate: React.ReactChild;
    label: React.ReactChild;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    style?: any;
    additionalStyle?: String;
    isEdit?: boolean;
    priority?: React.ReactChild;
    titleStyle?: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({
    checkBox,
    title,
    label,
    dueDate,
    onClick,
    style,
    additionalStyle,
    titleStyle,
}) => {
    const itemStyle = classNames(additionalStyle, "drop-shadow-all");

    return (
        <div style={style} className={itemStyle} onClick={onClick}>
            <div className={customStyle.checkBox}>{checkBox}</div>
            <div className={customStyle.center}>
                <div className={classNames(customStyle.title, titleStyle)}>
                    {title}
                </div>
                <div className={customStyle.label}>{label}</div>
            </div>
            <div className={customStyle.duedate}>{dueDate}</div>
        </div>
    );
};
