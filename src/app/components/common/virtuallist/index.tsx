import React, { forwardRef } from "react";
import { FixedSizeList as List, ReactElementType } from "react-window";

export interface ListProps {
    row: any;
    outerElementType?: ReactElementType;
    height: number | string;
    total: number;
    className: string;
    itemSize: number;
    width: number | string;
    itemData: any;
}

export const ListContainer: React.FC<ListProps> = ({
    row,
    outerElementType,
    height,
    total,
    className,
    itemSize,
    width,
    itemData,
}) => {
    return (
        <List
            className={className}
            height={height}
            itemCount={total}
            itemSize={itemSize}
            outerElementType={outerElementType}
            width={width}
            itemData={itemData}
        >
            {row}
        </List>
    );
};
