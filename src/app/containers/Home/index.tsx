import React, { useState, useEffect } from "react";
import style from "./style.css";
import { RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    SearchBar,
    Profile,
    Popover,
    SegmentContainer,
    TodoList,
    SideBar,
    TodoItemModal,
} from "../../components";

export namespace Home {
    export interface Props extends RouteComponentProps<void> {}
}

const staticData = [
    {
        _id: "123df",
        title: "Pickup kids from school!",
        desc: "",
        labels: ["label1", "label2"],
        dueDate: "2020-07-10",
        status: 0,
        priority: 0,
        groupId: "",
    },
    {
        _id: "123de",
        title: "Don't forget to close the gate!!",
        desc: "",
        labels: ["label1", "label2"],
        dueDate: "2020-06-03",
        status: 2,
        priority: 0,
        groupId: "",
    },
    {
        _id: "123de",
        title: "This is going to look awesome",
        desc: "",
        labels: ["label1", "label2"],
        dueDate: "2020-06-03",
        status: 1,
        priority: 0,
        groupId: "",
    },
];

export const Home = ({ history, location }: Home.Props) => {
    const [selectedIndex, setSelected] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {}, []);

    return (
        <div className={style.container}>
            <div className={style.sidebar}>
                <div className={style.logo}>TodoIt</div>
                <div className={style.sidedBarContainer}>
                    <SideBar />
                </div>
            </div>
            <div className={style.body}>
                <div className={style.top}>
                    <div className={style.search}>
                        <SearchBar
                            onChange={(e) => console.log(e)}
                            onFocus={() => console.log(focus)}
                        />
                    </div>
                    <div className={style.profile}>
                        <Popover
                            showArrow={true}
                            triggerNode={
                                <div>
                                    <Profile label={"Harish"} />
                                </div>
                            }
                            trigger="click"
                        >
                            <div className={style.popovertext}>
                                <FontAwesomeIcon
                                    className={style.smallIcon}
                                    icon={["fas", "sign-out-alt"]}
                                    size="lg"
                                />
                                Logout
                            </div>
                        </Popover>
                    </div>
                </div>
                <div className={style.bodyContainer}>
                    <div className={style.segment}>
                        <SegmentContainer
                            items={[
                                { label: "Todo", count: 2 },
                                { label: "Done", count: 5 },
                            ]}
                            selectedIndex={selectedIndex}
                            onChange={(e, i) => setSelected(i)}
                        />
                    </div>
                    <div className={style.todoList}>
                        <TodoList items={staticData} />
                    </div>
                </div>
                <TodoItemModal
                    onclose={(data) => {
                        console.log(data);
                        setIsModalOpen(false);
                    }}
                    isOpen={isModalOpen}
                />
            </div>
        </div>
    );
};
