import React, { useState } from "react";
import style from "./style.css";
import { SearchBox, SearchBarContainer } from "../common";
import { makeExpanding } from "../common/";
import { TodoModel } from "app/models";

export interface SearchBarProps {
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onChange, onFocus }) => {
    const ExpandingSearchBox = makeExpanding(SearchBox);

    const group = {
        _id: "123ef",
        users: [],
        name: "Home stuff",
        meta: {},
    };

    const todo: TodoModel = {
        _id: "123df",
        title: "todo1",
        desc: "",
        labels: ["label1", "label2"],
        dueDate: "",
        status: 0,
        priority: 0,
        groupId: "",
    };
    return (
        <div>
            <ExpandingSearchBox onChange={onChange} />
            {/* <SearchBarContainer
                groups={[
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                    group,
                ]}
                todos={[
                    todo,
                    todo,
                    todo,
                    todo,
                    todo,
                    todo,
                    todo,
                    todo,
                    todo,
                    todo,
                    todo,
                    todo,
                    todo,
                ]}
            /> */}
        </div>
    );
};
