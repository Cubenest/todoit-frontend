import React from "react";
import classNames from "classnames";
import { GroupModel, TodoModel } from "../../../models";
import { SearchEmpty } from "./searchEmpty";
import { SearchTodoResult } from "./searchTodoResult";
import { SearchGroupResult } from "./searchGroupResult";
import style from "./style.css";
export interface SearchBarContainerProps {
    groups: GroupModel[];
    todos: TodoModel[];
    show: boolean;
}

export const SearchBarContainer: React.FC<SearchBarContainerProps> = ({
    groups,
    todos,
    show,
}) => {
    return (
        <div
            className={classNames(style.searchContainer, "drop-shadow-all")}
            style={{ display: !show ? "none" : "" }}
        >
            {groups && groups.length > 0 ? (
                <SearchGroupResult items={groups} />
            ) : (
                <SearchEmpty />
            )}
            {todos && todos.length > 0 ? (
                <SearchTodoResult items={todos} />
            ) : (
                <SearchEmpty />
            )}
        </div>
    );
};
