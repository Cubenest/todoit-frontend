import React, { useState, useEffect } from "react";
import * as moment from "moment";
import classNames from "classnames";
import style from "./style.css";
import { Modal, TitleEdit, Label, RadioGroup } from "../common";
import { TodoItem } from "../todoItem";
import { EditLabelContainer } from "../labelcontainer";
import ReactDatePicker from "react-datepicker";
import { ModalData, PRIORITY_VALUES } from "app/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface TodoItemModalProps {
    onClose: (data: ModalData) => void;
    data?: ModalData;
    isOpen: boolean;
}

export const TodoItemModal: React.FC<TodoItemModalProps> = ({
    onClose,
    data,
    isOpen,
}) => {
    const date = new Date();
    const [title, setTitle] = useState<string>("");
    const [labels, setLabel] = useState<string[]>([]);
    const [priority, setPriority] = useState<string>("med");
    const [dueDate, setDueDate] = useState<Date>(date);

    return (
        <Modal
            isModalOpen={isOpen}
            closeModal={() => onClose((undefined as unknown) as ModalData)}
            overlayStyle={style.overlay}
            modalStyle={style.modal}
        >
            <TodoItem
                isEdit={true}
                title={
                    <TitleEdit
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fontSize={26}
                        compoStyle={title.length <= 0 ? style.titleError : null}
                    />
                }
                titleStyle={style.title}
                dueDate={
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <ReactDatePicker
                                showTimeSelect
                                selected={dueDate}
                                onChange={(date) => setDueDate(date as Date)}
                                popperPlacement="bottom-end"
                                customInput={
                                    <Label
                                        titleElement={
                                            dueDate === date
                                                ? "set due date"
                                                : moment(dueDate).format(
                                                      "Do MMM"
                                                  )
                                        }
                                        backgroundColor={"#50eea0"}
                                        onClick={() => null}
                                    />
                                }
                            />
                            <RadioGroup
                                items={PRIORITY_VALUES}
                                selected={PRIORITY_VALUES.indexOf(priority)}
                                activeStyle={classNames(style[priority])}
                                onchange={(e) => setPriority(e)}
                            />
                        </div>
                        <div
                            onClick={() =>
                                title.length > 0 &&
                                onClose({ title, labels, priority, dueDate })
                            }
                            className={classNames(style.fab, "drop-shadow-all")}
                        >
                            <FontAwesomeIcon
                                icon={["fas", "check"]}
                                size={"3x"}
                            />
                        </div>
                    </div>
                }
                label={
                    <EditLabelContainer
                        items={labels}
                        onAdd={(v) => setLabel((labels) => [...labels, v])}
                        onRemove={(index) =>
                            setLabel(
                                (labels) =>
                                    labels.splice(index, 1) && [...labels]
                            )
                        }
                    />
                }
                additionalStyle={style.item}
            />
        </Modal>
    );
};
