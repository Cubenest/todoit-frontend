import React from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SucessMessageProps {
    message?: string;
    compStyle?: string;
    
}

export const SucessMessage: React.FC<SucessMessageProps> = ({ 
    message, 
    compStyle,
}) => {
    const styleSucessMessageContainer = classNames(style.sucesscontainer);
    const styleSucessMessage = classNames(style.sucessmessage);

    return (

    <div className={styleSucessMessageContainer} >
        <FontAwesomeIcon icon={["fas", "thumbs-up"]}
        size="3x" />
        <div className={styleSucessMessage}>{message}</div>
    </div>
    );
};
