import React, {
    forwardRef,
    useRef,
    useState,
    useEffect,
    useLayoutEffect,
    MutableRefObject,
} from "react";
import { GroupModel } from "app/models";
import { ListContainer } from "../virtuallist";
import { SearchGroupItem } from "../listitem";
import styleSheet from "./style.css";

export interface SearchGroupResultProps {
    items: GroupModel[];
}

export interface RowProps<T> {
    index: number;
    style: any;
    data: T;
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
                style={style}
                additionalStyle={styleSheet.item}
                {...data[index]}
            />
        );
    };
    return (
        <div>
            <p>Groups</p>
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
