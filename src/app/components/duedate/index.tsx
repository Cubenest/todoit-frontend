import React, { useState } from "react";
import style from "./style.css";
import PropTypes from 'prop-types'
import classNames from "classnames";
import { Label } from "app/components/common/label";
import { LabelIcon } from "app/components/common/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DueDateProps {
    dateTime?: any;
    toDate?: any;
    isComplete?: boolean;
    compStyle?: string;
    backgroundColor?: string | string[];
}

export const DueDate: React.FC<DueDateProps> = ({
    dateTime,
    isComplete,
    toDate,
    compStyle,
    backgroundColor,
}) => {
    const styleDateTime = classNames(
        isComplete ? "Completed" : ""
    );
        
    const styleDateOverDue = classNames(
        style.dateOverDue,
        dateTime ? "overdue" : ""
    );
    
    const styleDateToday = classNames(style.datetimeFormat);
    const iconElement = <FontAwesomeIcon icon={["fas", "stopwatch"]} />;
    const styleDateNotOverdue = classNames(style.dateNotOverdue,toDate);


    // const dueDatefunction = React.useCallback((): JSX.Element => {
    //     const dueDateFun = dueDate >= todate ? "overdue" : "";
    //     return (
    //         <LabelIcon
    //             titleElement={dueDateFun}
    //             labelIcon ={iconElement as React.ReactChild}
    //             backgroundColor={backgroundColor}
    //         />
    //     );
    //   }, [dueDate]);


    // const isCompleteFunction = React.useCallback((): JSX.Element => {
    //     const iscompleitem = isComplete ? "Completed" : dueDatefunction();
    //     return (
    //         <Label 
    //         titleElement={iscompleitem as React.ReactChild}
    //         backgroundColor={backgroundColor}
    //       />  
    //     );
    //   }, [isComplete]);

    const checkIsCompelete = React.useCallback((): JSX.Element | void => {
        if (isComplete == true) {
            return (
                <Label 
                titleElement={styleDateTime}
                backgroundColor={backgroundColor}
              />  
            );
        }
        else if(dateTime >= toDate){
            return (
                <LabelIcon
                    titleElement={styleDateOverDue}
                    labelIcon ={iconElement as React.ReactChild}
                    backgroundColor={backgroundColor}
                />
            );

        }
        else{
            return (
                <LabelIcon
                    titleElement={styleDateNotOverdue}
                    labelIcon ={iconElement as React.ReactChild}
                    backgroundColor={backgroundColor}
                />
            ); 
        }
      }, [isComplete]);
  
    return (

        <div>
            {checkIsCompelete()}
            
            {/* if (isComplete == "true") {
                return <Label 
                    titleElement={styleDateTime as React.ReactChild}
                    backgroundColor={backgroundColor}
                    compStyle={styleDateTime}
                    />  
                    ;
                    }
                    elseif(DueDate >= toDate){
                    return  <LabelIcon
                        titleElement={styleDateOverDue}
                        labelIcon ={iconElement as React.ReactChild}
                        backgroundColor={backgroundColor}
                    />;

                    }
                    else{
                        return <LabelIcon
                        titleElement={styleDateToday}
                        labelIcon ={iconElement as React.ReactChild}
                        backgroundColor={backgroundColor}
                    />;
                    } */}
        

        </div>
                       

    );
};
