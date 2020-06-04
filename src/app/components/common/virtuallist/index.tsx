import React, { forwardRef } from "react";
import { FixedSizeList as List, ReactElementType } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
export interface ListProps {
    row: any;
    outerElementType?: ReactElementType;
    total: number;
    className?: string;
    itemSize: number;
    itemData: any;
}

export const ListContainer: React.FC<ListProps> = ({
    row,
    outerElementType,
    total,
    className,
    itemSize,
    itemData,
}) => {
    return (
        <AutoSizer>
            {({ height, width }) => (
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
            )}
        </AutoSizer>
    );
};
