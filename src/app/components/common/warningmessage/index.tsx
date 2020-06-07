import React from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface WarningMessageProps {
    message?: string;
    compStyle?: string;
}

export const WarningMessage: React.FC<WarningMessageProps> = ({
    message,
    compStyle,
}) => {
    const styleWarningMessageContainer = classNames(style.warningcontainer);
    const styleWarningMessage = classNames(style.warningmessage);

    return (
        <div className={styleWarningMessageContainer}>
            <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} size="3x" />
            <div className={styleWarningMessage}>{message}</div>
        </div>
    );
};
