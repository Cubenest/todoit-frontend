import React, { forwardRef } from "react";
import { TodoModel } from "app/models";
import { ListContainer } from "../virtuallist";
import styleSheet from "./style.css";
import { SearchTodoItem } from "../listitem";
import { RowProps } from "./searchGroupResult";

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
                style={style}
                additionalStyle={styleSheet.item}
                {...data[index]}
            />
        );
    };
    return (
        <div>
            <p>Todos</p>
            <ListContainer
                className={styleSheet.list}
                row={Row}
                itemData={items}
                outerElementType={outerElementType}
                height={200}
                total={items.length}
                itemSize={35}
                width={"100%"}
            />
        </div>
    );
};
