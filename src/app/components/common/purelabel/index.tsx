import * as React from "react";
import style from "./style.css";
import classNames from "classnames";
interface PureLabelProps {
    centreElement: React.ReactElement;
    leftElement?: React.ReactElement;
    rightElement?: React.ReactElement;
    backgroundColor?: string | string[];
    borderRadius?: number;
    compStyle?: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const PureLabel: React.FC<PureLabelProps> = ({
    centreElement,
    leftElement,
    rightElement,
    backgroundColor,
    borderRadius,
    compStyle,
    onClick,
}) => {
    const styleLeft = classNames(style.item, style.left);
    const styleCenter = classNames(style.item, style.center);
    const styleRight = classNames(style.item, style.right);
    const styleContainer = classNames(
        style.container,
        compStyle,
        onClick ? style.btn : null
    );

    return (
        <div
            className={styleContainer}
            style={{
                ...(backgroundColor &&
                    typeof backgroundColor === "string" && {
                        backgroundColor: backgroundColor,
                    }),
                ...(backgroundColor &&
                    Array.isArray(backgroundColor) && {
                        backgroundImage: `linear-gradient(to bottom right, ${backgroundColor[0]}, ${backgroundColor[1]})`,
                    }),
                ...(borderRadius && { borderRadius }),
            }}
            onClick={onClick}
        >
            <div className={styleLeft}>{leftElement}</div>
            <div className={styleCenter}>{centreElement}</div>
            <div className={styleRight}>{rightElement}</div>
        </div>
    );
};
