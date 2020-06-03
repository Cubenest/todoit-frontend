import React from "react";
import style from "./style.css";
import classNames from "classNames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SideBarProps {
    isSelected?: boolean;
    compStyle?: string;
}

export const SideBar: React.FC<SideBarProps> = ({ isSelected, compStyle }) => {
    const viewportGroupStyle = classNames(style.viewport);
    const styleSidebar = classNames(style.sidebar);
    const styleNav = classNames(style.nav);
    const styleNavActive = classNames(style.activenav);

    return (
        <div className={viewportGroupStyle}>
            <div className={styleSidebar}>
                <header>
                    <a href="#">TODOIT</a>
                </header>
                <ul className={styleNav}>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={["fas", "home"]} /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={["fas", "calendar"]} />{" "}
                            Calendar
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={["fas", "list"]} /> List
                        </a>
                    </li>
                    <li>
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
                    </li>
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
