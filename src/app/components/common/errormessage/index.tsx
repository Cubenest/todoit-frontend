import React from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ErrorMessageProps {
    message?: string;
    compStyle?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
    message,
    compStyle,
}) => {
    const styleErrorMessageContainer = classNames(style.errorcontainer);
    const styleErrorMessage = classNames(style.errormessage);

    return (
        <div className={styleErrorMessageContainer}>
            <FontAwesomeIcon icon={["fas", "times"]} size="3x" />
            <div className={styleErrorMessage}>{message}</div>
        </div>
    );
};
