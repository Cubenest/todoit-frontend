import React from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GroupItemProps {
    title?: string;
    isSelected?:boolean;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    compStyle?: string;
    isEdit?: boolean;
    
}

export const GroupItem: React.FC<GroupItemProps> = ({ 
    title, 
    isSelected,
    compStyle,
    onClick,
    isEdit, 
}) => {
    const groupItemDivStyle = classNames(style.groupItemDiv);

    return (

    <div className={groupItemDivStyle}>
      {isEdit ? (
        <div>
         <input
           value={title}
            type="text"
            placeholder="Write Group Name"
          />
          <div style={{float:"right"}}>
            <FontAwesomeIcon icon={["fas", "share-alt"]} />
        </div> 
        </div>
      ) : (
        <div 
          onClick={onClick}
        > 
        {title}
        <div style={{float:"right"}}>
            <FontAwesomeIcon icon={["fas", "check"]} />
         </div> 
        </div>
         
      )}
       
    </div>
    );
};
