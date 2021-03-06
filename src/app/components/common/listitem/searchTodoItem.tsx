import React from "react";
import { TodoModel } from "app/models";
import style from "./style.css";
export interface SearchTodoItemProps extends TodoModel {
    style: any;
    additionalStyle: string;
}
export const SearchTodoItem: React.FC<SearchTodoItemProps> = ({
    desc,
    dueDate,
    status,
    priority,
    groupId,
    _id,
    title,
    labels,
    style,
    additionalStyle,
}) => {
    return (
        <div style={style} className={additionalStyle}>
            {title}
        </div>
    );
};
