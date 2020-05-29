import * as React from "react";
import style from "./style.css";
import classNames from "classnames";


interface SegmentButtonProps {
    title?: React.ReactChild;
    count ?: number;
    isSelected?: boolean;
    compStyle?: React.CSSProperties;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const SegmentButton: React.FC<SegmentButtonProps> = ({
    title,
    count,
    isSelected,
    compStyle,
    onClick,
    
    
}) => {

    
    const styleTitle = classNames(style.item, style.title);
    const styleCount = classNames(style.item, style.count);
    const styleContainerTitle = classNames(
        style.Containertitle,
        onClick ? style.active : null
    );

    
    return (
        <div
            className={styleContainerTitle}
            style={{
                ...compStyle,

            }}
            onClick={onClick}
           
        >
            <div className={styleTitle}>{title}</div>
            <div className={styleCount}>{count}</div>
        </div>
    );
};
