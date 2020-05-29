import * as React from "react";
import style from "./style.css";
import classNames from "classnames";



interface LabelIconProps {
    titleElement?: React.ReactChild;
    labelicon?: React.ReactChild;
    compStyle?: React.CSSProperties;
}

export const LabelIcon: React.FC<LabelIconProps> = ({
    titleElement,
    labelicon,
    compStyle,
    
}) => {
    const styleTitle = classNames(style.item,style.title);
    const styleLabelIcon = classNames(style.item,style.labelicon);

    return (
        <div
            style={{
                ...compStyle,

            }}
        >
            <div className={styleLabelIcon}>{labelicon}</div>
            <div className={styleTitle}>{titleElement}</div>
        </div>
    );
};
