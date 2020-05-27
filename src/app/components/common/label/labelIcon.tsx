import * as React from "react";
import style from "./style.css";
import classNames from "classnames";



interface LabelIconProps {
    titleElement?: React.ReactChild;
    labelicon?: React.ReactChild;
    backgroundColor?: string | string[];
    borderRadius?: number;
    compStyle?: React.CSSProperties;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const LabelIcon: React.FC<LabelIconProps> = ({
    titleElement,
    labelicon,
    backgroundColor,
    borderRadius,
    compStyle,
    onClick,
    
}) => {
    const styleTitle = classNames(style.item,style.title);
    const styleLabelIcon = classNames(style.item,style.labelicon);
    const styleContainer = classNames(
        style.container,
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
                ...compStyle,

            }}
            onClick={onClick}
        >
            <div className={styleLabelIcon}>{labelicon}</div>
            <div className={styleTitle}>{titleElement}</div>
        </div>
    );
};
