import * as React from "react";
import { PureLabel } from "../purelabel";

interface LabelProps {
    titleElement?: React.ReactChild;
    backgroundColor?: string | string[];
    compStyle?: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Label: React.FC<LabelProps> = ({
    titleElement,
    backgroundColor,
    compStyle,
    onClick,
}) => {
    return (
        <PureLabel
            centreElement={titleElement as React.ReactElement}
            compStyle={compStyle}
            backgroundColor={backgroundColor}
            borderRadius={30}
            onClick={onClick}
        />
    );
};
