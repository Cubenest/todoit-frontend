import React from "react";
import classNames from "classnames";
import style from "./style.css";
export interface TitleProps {
    title: string;
    fontSize?: number;
    compoStyle?: string;
}

export const Title: React.FC<TitleProps> = ({
    title,
    fontSize,
    compoStyle,
}) => {
    return (
        <div
            className={classNames(style.title, compoStyle)}
            style={{ fontSize: fontSize || 16 }}
        >
            {title}
        </div>
    );
};

export interface TitleEditProps {
    fontSize?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    compoStyle?: string;
}

export const TitleEdit: React.FC<TitleEditProps> = ({
    fontSize,
    onChange,
    value,
    compoStyle,
}) => {
    return (
        <div className={classNames(style.title, compoStyle)}>
            <input
                type="text"
                autoComplete="off"
                placeholder="jot something down!"
                autoFocus={true}
                onChange={onChange}
                className={style.input}
                value={value}
                style={{ fontSize: fontSize || 16 }}
            />
        </div>
    );
};
