import React, { useState } from "react";
import style from "./style.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Label } from "app/components/common/label";
import { LabelIcon } from "app/components/common/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as moment from "moment";

interface DueDateProps {
    dateTime: Date;
    toDate: Date;
    isComplete?: boolean;
    compStyle?: string;
}

export const DueDate: React.FC<DueDateProps> = ({
    dateTime,
    isComplete,
    toDate,
    compStyle,
}) => {
    const COLORS = {
        complete: "#8cf200",
        normal: "#00b4f1",
        overdue: "#f25900",
    };
    const textStyle = classNames(compStyle, style.text);

    const iconElement = <FontAwesomeIcon icon={["fas", "stopwatch"]} />;

    if (isComplete == true) {
        return (
            <Label
                titleElement={"Completed"}
                backgroundColor={COLORS.complete}
                compStyle={textStyle}
            />
        );
    } else if (dateTime <= toDate) {
        return (
            <LabelIcon
                titleElement={"Overdue"}
                labelIcon={iconElement as React.ReactChild}
                backgroundColor={COLORS.overdue}
                compStyle={textStyle}
            />
        );
    } else {
        return (
            <LabelIcon
                titleElement={moment(dateTime).format("Do MMM")}
                labelIcon={iconElement as React.ReactChild}
                backgroundColor={COLORS.normal}
                compStyle={textStyle}
            />
        );
    }
};
