import React from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GroupItemProps {
    title?: string;
    isSelected?: boolean;
    onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    compStyle?: string;
    isEdit?: boolean;
    onAdd: (name: string) => void;
}
const nameRef = React.createRef<HTMLInputElement>();

export const GroupItem: React.FC<GroupItemProps> = ({
    title,
    isSelected,
    compStyle,
    onClick,
    isEdit,
    onAdd,
}) => {
    const groupItemDivStyle = classNames(style.groupItemDiv);
    return (
        <div className={groupItemDivStyle}>
            {isEdit ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "space-between",
                    }}
                >
                    <input
                        ref={nameRef}
                        value={title}
                        type="text"
                        placeholder="Write Group Name"
                    />
                    <div
                        style={{
                            float: "right",
                            backgroundColor: "#5bc0de",
                            padding: 10,
                            borderRadius: 30,
                        }}
                        onClick={() => {
                            if (nameRef) {
                                onAdd(nameRef.current?.value as string);
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={["fas", "check"]} />
                    </div>
                </div>
            ) : (
                <div onClick={onClick}>
                    {title}
                    {/* <div style={{ float: "right" }}>
                        <FontAwesomeIcon icon={["fas", "share-alt"]} />
                    </div> */}
                </div>
            )}
        </div>
    );
};
