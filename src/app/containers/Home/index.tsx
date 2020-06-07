import React, { useState, useEffect } from "react";
import classNames from "classnames";
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
    Modal,
    LoaderComp,
    GroupItem,
} from "../../components";
import { TodoModel, GroupModel } from "app/models";
import groupService from "app/services/group.service";
import todoService from "app/services/todo.service";
import {
    ModalData,
    PriorityMap,
    PRIORITY_VALUES,
    STATUS_VALUES,
} from "app/utils";
import authService from "app/services/auth.service";

export namespace Home {
    export interface Props extends RouteComponentProps<void> {}
}

export const Home = ({ history, location }: Home.Props) => {
    const [selectedIndex, setSelected] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [groupModal, setGroupModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [todoList, setTodoList] = useState<{
        todos: TodoModel[];
        count: number;
    }>({ todos: [], count: 0 });
    const [todoListComplete, setTodoListComplete] = useState<{
        todos: TodoModel[];
        count: number;
    }>({ todos: [], count: 0 });
    const [groupList, setGroupList] = useState<{
        groups: GroupModel[];
        count: number;
    }>({ groups: [], count: 0 });
    const [selectedGroup, setSelectedGroup] = useState<
        GroupModel | undefined
    >();
    const [selectedTodo, setSelectedTodo] = useState<TodoModel | undefined>();
    const [addNew, setAddNew] = useState(false);

    useEffect(() => {
        (async function asynFunc(token) {
            try {
                setIsLoading(true);

                const group = await groupService.getAllGroups();
                if (group.data.groups.length > 0) {
                    const todos = await todoService.getAllOngoingTodo(
                        group.data.groups[0]._id
                    );
                    setSelectedGroup(group.data.groups[0]);
                    setGroupList(group.data);
                    setTodoList(todos.data);
                    setIsLoading(false);
                } else {
                    const group = await groupService.createGroup();
                    const todos = await todoService.getAllOngoingTodo(
                        group.data.groups[0]._id
                    );
                    setSelectedGroup(group.data);
                    setGroupList(group.data);
                    setTodoList(todos.data);
                    setIsLoading(false);
                }
            } catch (error) {
                setIsLoading(false);
            }
        })();
    }, []);

    const handleGroupChange = async (group: GroupModel) => {
        if (selectedGroup?._id !== group._id) {
            setIsLoading(true);
            try {
                setSelectedGroup(group);
                const todos = await todoService.getAllOngoingTodo(group._id);
                setTodoList(todos.data);
                setTodoListComplete({ todos: [], count: 0 });
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        }
    };

    const handleAddTodo = async (data: ModalData) => {
        if (!data) return setIsModalOpen(false);
        if (selectedGroup?._id) {
            setIsLoading(true);

            try {
                const addTodo = await todoService.addTodo(selectedGroup?._id, {
                    title: data.title,
                    priority: PriorityMap[data.priority],
                    dueDate: data.dueDate,
                    labels: data.labels,
                    status: 0,
                });
                handleIndexChange(0);
                setIsModalOpen(false);
                setIsLoading(false);
            } catch (error) {
                console.log("handleAddTodo -> error", error);
                setIsLoading(false);
            }
        }
    };

    const handleIndexChange = async (i: number) => {
        setSelected(i);

        try {
            if (i === 0 && selectedGroup) {
                setIsLoading(true);

                const todos = await todoService.getAllOngoingTodo(
                    selectedGroup?._id
                );
                setTodoList(todos.data);
                setIsLoading(false);
            } else if (i === 1 && selectedGroup) {
                setIsLoading(true);

                const todos = await todoService.getAllCompletedTodo(
                    selectedGroup?._id
                );
                setTodoListComplete(todos.data);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);

            console.log("handleIndexChange -> error", error);
        }
    };

    const handleItemClick = async (index: number, type: String) => {
        try {
            if (type === "complete" && selectedGroup) {
                setIsLoading(true);

                const todo = await todoService.markComplete(
                    selectedGroup?._id,
                    todoList.todos[index]
                );
                const clone = [...todoList.todos];
                clone.splice(index, 1);
                setTodoList({
                    todos: [...clone],
                    count: todoList.count - 1,
                });
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
        }
    };

    const createGroup = async (name: string) => {
        if (name.length > 0) {
            setIsLoading(true);
            try {
                const group = await groupService.createNewGroup(name);
                const clone = [...groupList.groups];
                clone.push(group.data);
                setGroupList({
                    groups: [...clone],
                    count: groupList.count + 1,
                });
                setSelected(group.data);
                setIsLoading(false);
                setAddNew(false);
            } catch (error) {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className={style.container}>
            <Modal
                isModalOpen={isLoading}
                closeModal={() => null}
                modalStyle={style.modal}
            >
                <LoaderComp />
            </Modal>
            <div className={style.sidebar}>
                <div className={style.logo}>TodoIt</div>
                <div className={style.sidedBarContainer}>
                    <SideBar
                        addNew={addNew}
                        onAdd={createGroup}
                        groups={groupList?.groups}
                        selectedGroup={selectedGroup}
                        addNewGroup={(e) => setAddNew(true)}
                        onGroupSelect={handleGroupChange}
                        // addNewList={()=>}
                    />
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
                                    <Profile
                                        label={
                                            authService.getCurrentUser().email
                                        }
                                    />
                                </div>
                            }
                            trigger="click"
                        >
                            <div
                                className={style.popovertext}
                                onClick={() => {
                                    authService.logout();
                                    history.push("/login");
                                }}
                            >
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
                                { label: "Todo", count: todoList.count },
                                {
                                    label: "Done",
                                    count: todoListComplete.count,
                                },
                            ]}
                            selectedIndex={selectedIndex}
                            onChange={(e, i) => handleIndexChange(i)}
                        />
                    </div>
                    <div className={style.todoList}>
                        <TodoList
                            items={
                                selectedIndex === 0
                                    ? todoList.todos
                                    : todoListComplete.todos
                            }
                            onClick={handleItemClick}
                        />
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className={classNames(style.fab, "drop-shadow-all")}
                        >
                            <FontAwesomeIcon
                                icon={["fas", "plus"]}
                                size={"3x"}
                            />
                        </div>
                    </div>
                </div>
                <TodoItemModal
                    onClose={handleAddTodo}
                    isOpen={isModalOpen}
                    data={
                        selectedTodo && {
                            title: selectedTodo.title,
                            labels: selectedTodo.labels,
                            priority: PRIORITY_VALUES[selectedTodo.priority],
                            status: STATUS_VALUES[selectedTodo.status],
                            dueDate: new Date(selectedTodo.dueDate),
                        }
                    }
                />
            </div>
        </div>
    );
};
