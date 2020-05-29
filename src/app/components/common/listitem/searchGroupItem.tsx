import React, { CSSProperties } from "react";
import { GroupModel } from "app/models";
import style from "./style.css";
export interface SearchGroupItemProps extends GroupModel {
    style: any;
    additionalStyle: string;
}

export const SearchGroupItem: React.FC<SearchGroupItemProps> = ({
    _id,
    name,
    users,
    meta,
    style,
    additionalStyle,
}) => {
    return (
        <div style={style} className={additionalStyle}>
            {name}
        </div>
    );
};
