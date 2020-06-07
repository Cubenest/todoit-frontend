import React, { useState } from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GroupItem } from "../common";
import { GroupModel } from "app/models";

interface SideBarProps {
    selectedGroup?: GroupModel;
    compStyle?: string;
    dropDown?: any;
    groups: GroupModel[];
    addNewGroup: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onGroupSelect: (group: GroupModel) => void;
    onAdd: (name: string) => void;
    addNew: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({
    selectedGroup,
    compStyle,
    groups,
    addNewGroup,
    onGroupSelect,
    onAdd,
    addNew,
}) => {
    const viewportGroupStyle = classNames(style.viewport);
    const styleSidebar = classNames(style.sidebar);
    const styleNav = classNames(style.nav);
    const styleNavActive = classNames(style.activenav);
    const [dropDown, setdropDown] = useState(false);

    const [dropDownList, setdropDownList] = useState(false);
    const toggleDrop = () => setdropDown(!dropDown);
    const toggleDropList = () => setdropDownList(!dropDownList);

    return (
        <div className={viewportGroupStyle}>
            <div className={styleSidebar}>
                <ul className={styleNav}>
                    <li
                        className={style.dropdown}
                        onKeyPress={() => toggleDrop}
                        onClick={() => toggleDrop()}
                    >
                        {/* <a>
                            <FontAwesomeIcon icon={["fas", "calendar"]} />{" "}
                            Calendar
                            <div style={{ float: "right" }}>
                                {dropDown ? (
                                    <FontAwesomeIcon
                                        icon={["fas", "angle-up"]}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={["fas", "angle-down"]}
                                    />
                                )}
                            </div>
                        </a> */}
                        {/* {dropDown && (
                            <ul className={style.navdropdown}>
                                <li>
                                    <a href="#">Yesterday</a>
                                    <a href="#">Today</a>
                                    <a href="#">Tommorow</a>
                                </li>
                            </ul>
                        )} */}
                    </li>
                    <li>
                        <a onClick={() => toggleDropList()}>
                            <FontAwesomeIcon icon={["fas", "th-list"]} /> List
                            <div style={{ float: "right" }}>
                                {dropDownList ? (
                                    <FontAwesomeIcon
                                        icon={["fas", "angle-up"]}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={["fas", "angle-down"]}
                                    />
                                )}
                            </div>
                        </a>
                        {dropDownList && (
                            <ul className={style.navdropdown}>
                                {groups.map((i, index) => (
                                    <li
                                        className={classNames(
                                            i._id === selectedGroup?._id
                                                ? style.activenav
                                                : null
                                        )}
                                        onClick={(e) => onGroupSelect(i)}
                                        key={index}
                                    >
                                        <GroupItem
                                            title={i.name}
                                            isSelected={
                                                false
                                                // i._id === selectedGroup?._id
                                            }
                                            onAdd={onAdd}
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li>
                        <a onClick={addNewGroup}>
                            <FontAwesomeIcon icon={["fas", "plus-square"]} />
                            Add New List
                        </a>
                    </li>
                    {addNew && (
                        <li>
                            <a>
                                <GroupItem isEdit={true} onAdd={onAdd} />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};
