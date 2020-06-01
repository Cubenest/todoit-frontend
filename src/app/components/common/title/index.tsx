import React from "react";
import style from "./style.css";
export interface TitleProps {
    title: string;
    fontSize?: number;
}

export const Title: React.FC<TitleProps> = ({ title, fontSize }) => {
    return (
        <div className={style.title} style={{ fontSize: fontSize || 16 }}>
            {title}
        </div>
    );
};
