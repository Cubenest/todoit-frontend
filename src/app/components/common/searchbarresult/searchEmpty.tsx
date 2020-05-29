import React from "react";
import style from "./style.css";
export interface SearchEmptyProps {}

export const SearchEmpty: React.FC<SearchEmptyProps> = ({}) => {
    return <div className={style.emptyContainer}>Empty</div>;
};
