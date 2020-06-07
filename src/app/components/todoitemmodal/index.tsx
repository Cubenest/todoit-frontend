import React, { useState, useEffect } from "react";
import * as moment from "moment";
import classNames from "classnames";
import style from "./style.css";
import { Modal, TitleEdit, Label, RadioGroup } from "../common";
import { TodoItem } from "../todoItem";
import { EditLabelContainer } from "../labelcontainer";
import ReactDatePicker from "react-datepicker";
import { ModalData } from "app/utils";

export interface TodoItemModalProps {
    onclose: (data: ModalData) => void;
    data?: ModalData;
    isOpen: boolean;
}

export const TodoItemModal: React.FC<TodoItemModalProps> = ({
    onclose,
    data,
    isOpen,
}) => {
    const date = new Date();
    const [title, setTitle] = useState<string>("");
    const [labels, setLabel] = useState<string[]>([]);
    const [priority, setPriority] = useState<string>("med");
    const [dueDate, setDueDate] = useState<Date | null>(date);
    const [editData, setEditData] = useState<ModalData>();
    const PRIORITY_VALUES = ["low", "med", "high"];

    useEffect(() => {
        if (data) {
            setEditData(data);
        }
    }, []);
    return (
        <Modal
            isModalOpen={isOpen}
            closeModal={() => onclose({ title, labels, priority, dueDate })}
            overlayStyle={style.overlay}
            modalStyle={style.modal}
        >
            <TodoItem
                isEdit={true}
                title={
                    <TitleEdit
                        value={editData?.title || title}
                        onChange={(e) => setTitle(e.target.value)}
                        fontSize={26}
                    />
                }
                titleStyle={style.title}
                dueDate={
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <ReactDatePicker
                            showTimeSelect
                            selected={editData?.dueDate || dueDate}
                            onChange={(date) => setDueDate(date)}
                            popperPlacement="bottom-end"
                            customInput={
                                <Label
                                    titleElement={
                                        dueDate === date
                                            ? "set due date"
                                            : moment(dueDate).format("Do MMM")
                                    }
                                    backgroundColor={"#50eea0"}
                                    onClick={() => null}
                                />
                            }
                        />
                        <RadioGroup
                            items={PRIORITY_VALUES}
                            selected={PRIORITY_VALUES.indexOf(
                                editData?.priority || priority
                            )}
                            activeStyle={classNames(style[priority])}
                            onchange={(e) => setPriority(e)}
                        />
                    </div>
                }
                label={
                    <EditLabelContainer
                        items={editData?.labels || labels}
                        onAdd={(v) =>
                            v.length > 0 && setLabel((labels) => [...labels, v])
                        }
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
