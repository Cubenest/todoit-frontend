import React from "react";
import classNames from "classnames";
import style from "./style.css";

export interface ModalProps {
    isModalOpen: boolean;
    closeModal: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    overlayStyle?: string;
    modalStyle?: String;
}

export const Modal: React.FC<ModalProps> = ({
    isModalOpen,
    closeModal,
    overlayStyle,
    children,
    modalStyle,
}) => {
    return (
        <div
            style={{
                display: isModalOpen ? "block" : "none",
            }}
            className={style.outerStyle}
        >
            <div
                className={classNames(style.overlay, overlayStyle)}
                onClick={closeModal}
            />
            <div onClick={closeModal} />
            <div className={classNames(style.modal, modalStyle)}>
                {children}
            </div>
        </div>
    );
};
