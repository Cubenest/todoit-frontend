
import React, { useState } from "react";
import style from "./style.css";
import PropTypes from "prop-types";
import classNames from "classNames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faThList } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

interface SideBarProps {
    isSelected?: boolean;
    compStyle?: string;
}

export const SideBar: React.FC<SideBarProps> = ({
    isSelected,
    compStyle,
}) => {
    const homeIconElement = <FontAwesomeIcon icon={["fas", "home"]} />;
    const viewportGroupStyle = classNames(style.viewport);
    const styleSidebar = classNames(style.sidebar);
    const styleNav = classNames(style.nav);
    const styleNavActive = classNames(style.activenav);

    const styleContainerTitle = classNames(
        compStyle,
        isSelected ? style.selected : style.notSelected
    );

    return (
        
        <div className={viewportGroupStyle}>
    
            <div className={styleSidebar}>
                <header>
                <a href="#">TODOIT</a>
                </header>
                <ul className={styleNav}>
                <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faHome} /> Home
                    </a>
                </li>
                <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faCalendar} /> Calendar
                    </a>
                </li>
                <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faThList} /> List
                    </a>
                </li>
                <li>
                    <a className={styleNavActive} href="#">
                    <FontAwesomeIcon icon={faTasks} /> All Tasks
                    </a>
                </li>
                <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faBriefcase} /> Work
                    </a>
                </li>
                <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faUserEdit} /> Personal
                    </a>
                </li>
                <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faPlusSquare} /> Add New List
                    </a>
                </li>
                </ul>
            </div>

        </div>


        
    );
};
