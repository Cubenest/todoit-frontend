import * as React from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface checkBoxProps {
    isChecked: boolean;
    disabled?: boolean;
    onChange?: React.FormEventHandler<HTMLElement>;
}

export const CheckBox: React.FC<checkBoxProps> = ({
    isChecked,
    disabled,
    onChange,
}) => {
    const handler = !disabled ? onChange : undefined;
    const styleCheckBox = classNames(style.checkBox);

    return (
        <div className={styleCheckBox}>
            <label className={style.label}>
                <input
                    className={style.label__checkbox}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handler}
                />
                <span className={style.label__text}>
                    <span className={style.label__check}>
                        <FontAwesomeIcon icon={["fas", "check"]} />
                    </span>
                </span>
            </label>
        </div>
    );
};
