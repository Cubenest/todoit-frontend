import React, { forwardRef } from "react";
import { GroupModel } from "app/models";
import { ListContainer } from "../virtuallist";
import { SearchGroupItem } from "../listitem";
import styleSheet from "./style.css";
import { RowProps } from "app/utils";

const GUTTER_SIZE = 1;
export interface SearchGroupResultProps {
    items: GroupModel[];
}

// function handleOnWheel({ deltaY }) {
//     // Your handler goes here ...
//     console.log("handleOnWheel()", deltaY);
// }

const outerElementType = forwardRef((props, ref) => (
    <div onWheel={() => null} {...props} />
));

export const SearchGroupResult: React.FC<SearchGroupResultProps> = ({
    items,
}) => {
    const Row: React.FC<RowProps<GroupModel[]>> = ({ data, index, style }) => {
        return (
            <SearchGroupItem
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
        <div style={{ height: 200, width: 200 }}>
            <p>Groups</p>
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
