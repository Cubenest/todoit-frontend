import * as React from "react";
import { PureLabel } from "../purelabel";

interface LabelIconProps {
    titleElement?: React.ReactChild;
    labelIcon?: React.ReactChild;
    compStyle?: string;
    backgroundColor?: string | string[];
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const LabelIcon: React.FC<LabelIconProps> = ({
    titleElement,
    labelIcon,
    compStyle,
    onClick,
    backgroundColor,
}) => {
    return (
        <PureLabel
            centreElement={titleElement as React.ReactElement}
            leftElement={labelIcon as React.ReactElement}
            borderRadius={30}
            compStyle={compStyle}
            backgroundColor={backgroundColor}
            onClick={onClick}
        />
    );
};
