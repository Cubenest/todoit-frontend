import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.css";
import { SearchBox, SearchBarContainer } from "../common";
import { makeExpanding } from "../common/";
import { TodoModel } from "app/models";

export interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
    const handleChange = (e: any) => {};
    const [isOpen, setIsOpen] = useState(false);

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
            <ExpandingSearchBox />
            <SearchBarContainer
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
            />
        </div>
    );
};
