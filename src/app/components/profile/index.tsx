import React from "react";
import classNames from "classnames";
import staticAvatar from "../../../assets/user-generic.jpg";
import style from "./style.css";
export interface ProfileProps {
    label: string;
    avatar?: any;
}

const userImageContainerStyle = classNames(style.userImage);

export const Profile: React.FC<ProfileProps> = ({ label, avatar }) => {
    return (
        <div className={classNames(style.container, "btn")}>
            <div className={style.label}>{label}</div>
            <div className={userImageContainerStyle}>
                <img
                    src={avatar || staticAvatar}
                    alt=""
                    className={style.userImage}
                />
            </div>
        </div>
    );
};
