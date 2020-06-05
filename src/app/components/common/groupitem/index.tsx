import React ,{ useState } from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GroupItemProps {
    title?: string;
    isSelected?:boolean;
    iconElemnt?:any;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    compStyle?: string;
    isEdit?: boolean;
}

export const GroupItem: React.FC<GroupItemProps> = ({ title, iconElemnt, isSelected,compStyle,isEdit,onClick  }) => {
    const viewportGroupStyle = classNames(style.viewport);
    const styleSidebar = classNames(style.sidebar);
    const styleNav = classNames(style.nav);
    const styleNavActive = classNames(style.activenav);
    const [dropDown, setdropDown] = useState(false);
    const [dropDownList, setdropDownList] = useState(false);
    const toggleDrop = () =>setdropDown(!dropDown);
    const toggleDropList = () =>setdropDownList(!dropDownList);
    return (
        <div className={viewportGroupStyle}>
            <div className={styleSidebar}>
                <ul className={styleNav}>
                    <li>
                        <a href="#">
                            Add New Group
                            <div style={{float:"right"}}>
                           <FontAwesomeIcon icon={["fas", "share-alt"]} />
                            </div> 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
