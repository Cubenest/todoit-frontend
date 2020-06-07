import * as React from "react";
import { PureLabel } from "../purelabel";

type IconPosition = "left" | "right";
interface LabelIconProps {
    titleElement?: React.ReactChild;
    labelIcon?: React.ReactChild;
    compStyle?: string;
    backgroundColor?: string | string[];
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    iconPosition?: IconPosition;
}

export const LabelIcon: React.FC<LabelIconProps> = ({
    titleElement,
    labelIcon,
    compStyle,
    onClick,
    backgroundColor,
    iconPosition,
}) => {
    let iconPosComp;
    iconPosComp = { leftElement: labelIcon as React.ReactElement };
    if (iconPosition && iconPosition === "right") {
        iconPosComp = { rightElement: labelIcon as React.ReactElement };
    }
    return (
        <PureLabel
            centreElement={titleElement as React.ReactElement}
            borderRadius={30}
            compStyle={compStyle}
            backgroundColor={backgroundColor}
            onClick={onClick}
            {...iconPosComp}
        />
    );
};
