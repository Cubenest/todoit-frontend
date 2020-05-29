import React, { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import style from "./style.css";
export interface SerachBoxProps {
    isOpen?: boolean;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void;
    additionalStyles?: any;
    onToggle?: (val: boolean) => void;
}
export const SearchBox: React.FC<SerachBoxProps> = ({
    isOpen,
    onClick,
    onFocus,
    additionalStyles,
    onToggle,
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
    // divStyle.width += baseStyles.icon.width + 5

    const toggle = (t: React.FocusEvent<HTMLInputElement>) => {
        onFocus && onFocus(t);
    };
    return (
        <div className={divStyle}>
            <input
                ref={(input) => {
                    nameInput = input as HTMLInputElement;
                }}
                name="search"
                type="text"
                className={textStyle}
                placeholder="Type here..."
                onFocus={toggle}
                onBlur={toggle}
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
