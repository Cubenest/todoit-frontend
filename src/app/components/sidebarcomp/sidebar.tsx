import React ,{ useState } from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SideBarProps {
    isSelected?: boolean;
    compStyle?: string;
    dropDown?: any;
}

export const SideBar: React.FC<SideBarProps> = ({ isSelected, compStyle }) => {
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
                    {/* <li>
                        <a href="#">
                            <FontAwesomeIcon icon={["fas", "home"]} /> Home
                        </a>
                    </li> */}
                    <li className={style.dropdown} onKeyPress={()=> toggleDrop} onClick={() =>toggleDrop()}>
                        <a href="#">
                            <FontAwesomeIcon icon={["fas", "calendar"]} />{" "}
                            Calendar
                           <div style={{float:"right"}}>
                           { dropDown ? <FontAwesomeIcon icon={["fas", "angle-up"]} /> : <FontAwesomeIcon icon={["fas", "angle-down"]} /> }
                            </div> 
                            
                        </a>
                        {dropDown && (
                            <ul className={style.navdropdown}  >
                                 <li>
                                     <a href="#">Yesterday</a>
                                     <a href="#">Today</a>
                                     <a href="#">Tommorow</a>
                                     
                                 </li>
                             </ul>
                        )}
                       
                    </li>
                    <li onClick={() =>toggleDropList()}>
                        <a href="#">
                            <FontAwesomeIcon icon={["fas", "th-list"]} /> List
                            <div style={{float:"right"}}>
                           { dropDownList ? <FontAwesomeIcon icon={["fas", "angle-up"]} /> : <FontAwesomeIcon icon={["fas", "angle-down"]} /> }
                            </div> 
                        </a>
                        {dropDownList && (
                            <ul className={style.navdropdown}  >
                                 <li>
                                     <a href="#">List 1</a>
                                     <a href="#">List 2</a>
                                     <a href="#">List 3</a>
                                     <a href="#">List 4 </a>
                                     <a href="#">List 5</a>
                                     <a href="#">List 6</a>
                                     
                                 </li>
                             </ul>
                        )}
                    </li>
                    {/* <li>
                        <a className={styleNavActive} href="#">
                            <FontAwesomeIcon icon={["fas", "tasks"]} /> All
                            Tasks
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={["fas", "briefcase"]} /> Work
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={["fas", "user-edit"]} />{" "}
                            Personal
                        </a>
                    </li> */}
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={["fas", "plus-square"]} />{" "}
                            Add New List
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
