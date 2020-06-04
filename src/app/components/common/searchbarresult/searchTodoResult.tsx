import React, { forwardRef } from "react";
import { TodoModel } from "app/models";
import { ListContainer } from "../virtuallist";
import styleSheet from "./style.css";
import { SearchTodoItem } from "../listitem";
import { RowProps } from "app/utils";
const GUTTER_SIZE = 1;
export interface SearchTodoResultProps {
    items: TodoModel[];
}

const outerElementType = forwardRef((props, ref) => (
    <div onWheel={() => null} {...props} />
));

export const SearchTodoResult: React.FC<SearchTodoResultProps> = ({
    items,
}) => {
    const Row: React.FC<RowProps<TodoModel[]>> = ({ data, index, style }) => {
        return (
            <SearchTodoItem
                style={{
                    ...style,
                    top: style.top + GUTTER_SIZE,
                    height: style.height - GUTTER_SIZE,
                }}
                additionalStyle={styleSheet.item}
                {...data[index]}
            />
        );
    };
    return (
        <div style={{ height: 200, width: 300 }}>
            <p>Todos</p>
            <ListContainer
                className={styleSheet.list}
                row={Row}
                itemData={items}
                outerElementType={outerElementType}
                total={items.length}
                itemSize={35}
            />
        </div>
    );
};
