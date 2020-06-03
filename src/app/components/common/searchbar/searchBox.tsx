import React, { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import style from "./style.css";
export interface SerachBoxProps {
    isOpen?: boolean;
    onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void;
    additionalStyles?: any;
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBox: React.FC<SerachBoxProps> = ({
    isOpen,
    onFocus,
    additionalStyles,
    onChange,
}) => {
    let nameInput: HTMLInputElement;
    console.log("additionalStyles", additionalStyles);

    const textStyle = classNames(
        isOpen ? style.open : style.closed,
        additionalStyles ? additionalStyles : null
    );
    const divStyle = classNames(
        textStyle,
        style.frame,
        additionalStyles ? additionalStyles : null
    );

    return (
        <div className={divStyle}>
            <input
                ref={(input) => {
                    nameInput = input as HTMLInputElement;
                }}
                name="search"
                type="text"
                className={textStyle}
                placeholder="Search For Tasks, List, etc..."
                onFocus={onFocus}
                onBlur={onFocus}
                onChange={onChange}
            />
            <div className={style.icon} onClick={() => nameInput.focus()}>
                <FontAwesomeIcon
                    className={style.smallIcon}
                    icon={["fas", "search"]}
                    size="lg"
                />
            </div>
        </div>
    );
};
