import React, { forwardRef } from "react";
import customStyle from "./style.css";
import { ListContainer } from "../common/virtuallist";
import { TodoItem } from "../todoItem";
import { RowProps, STATUS } from "app/utils";
import { TodoModel } from "app/models";
import { CheckBox, Title } from "../common";
import { LabelContainer } from "../labelcontainer";
import { DueDate } from "../duedate";

const GUTTER_SIZE = 8;
export interface TodoListProps {
    items: TodoModel[];
}
const outerElementType = forwardRef((props, ref) => (
    <div onWheel={() => null} {...props} />
));

export const TodoList: React.FC<TodoListProps> = ({ items }) => {
    const Row: React.FC<RowProps<TodoModel[]>> = ({ data, index, style }) => {
        const item = data[index];
        return (
            <TodoItem
                style={{
                    ...style,
                    top: style.top + GUTTER_SIZE,
                    height: style.height - GUTTER_SIZE,
                }}
                {...data[index]}
                title={<Title title={item.title} fontSize={25} />}
                checkBox={
                    <CheckBox
                        isChecked={item.status === STATUS.completed}
                        onChange={() => null}
                    />
                }
                label={<LabelContainer items={item.labels} />}
                dueDate={
                    <DueDate
                        isComplete={item.status === STATUS.completed}
                        dateTime={new Date(item.dueDate)}
                        toDate={new Date()}
                    />
                }
                additionalStyle={customStyle.item}
            />
        );
    };
    return (
        <ListContainer
            row={Row}
            itemData={items}
            outerElementType={outerElementType}
            itemSize={90}
            total={items.length}
        />
    );
};
