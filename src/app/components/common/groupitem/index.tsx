import React from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GroupItemProps {
    title?: string;
    type?:string;
    placeholder?:string;
    children?:React.ReactElement;
    isSelected?:boolean;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    compStyle?: string;
    isEdit?: boolean;
    
}

export const GroupItem: React.FC<GroupItemProps> = ({ 
    title, 
    type,
    placeholder,
    children,
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
          {children}
        </div>
      ) : (
        <div 
          onClick={onClick}
        >
          <span>
            {title || placeholder || "Editable content"}
          </span>
        </div>
      )}
        <div style={{float:"right"}}>
            <FontAwesomeIcon icon={["fas", "share-alt"]} />
        </div> 
    </div>
    );
};
