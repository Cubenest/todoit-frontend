import React ,{ useState, useEffect  } from "react";
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
    
}

export const GroupItem: React.FC<GroupItemProps> = ({ 
    title, 
    type,
    placeholder,
    children,
    isSelected,
    compStyle,
    onClick  
}) => {
    const groupItemDivStyle = classNames(style.groupItemDiv);

    const [isEditing, setEditing] = useState(false);

    const handleKeyDown = (event:any, type:any) => {
        // Handle when key is pressed
        console.log(handleKeyDown);
      };

    return (

    <div className={groupItemDivStyle}>
      {isEditing ? (
        <div 
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div 
          onClick={() => setEditing(true)}
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
