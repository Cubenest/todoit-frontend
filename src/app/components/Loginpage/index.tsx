import React, { useState } from "react";
import style from "./style.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface LoginProps {
    onChange?: React.ChangeEventHandler;
    compStyle?: string;
}

export const Login: React.FC<LoginProps> = ({
    onChange,
    compStyle,
}) => {
    const fromGroupStyle = classNames(style.groupcontainer);
    const highLight = classNames(style.highlight);
    const lineEffect = classNames(style.bar);
    const styleUserLabel = classNames(style.label);
    const styleFormSection = classNames(style.form);

    return (
        <form className={styleFormSection} onSubmit={()=>alert("")}>
            <h2>Login Here</h2>
            <div className={fromGroupStyle}>
                <input type="text" name="userName" id="userName" className={style.userName} required/>
                <span className={highLight}></span>
                <span className={lineEffect}></span>
                <label htmlFor="userName" className={styleUserLabel}>Enter User Name</label>
            </div>
            <br/>
            <div className={fromGroupStyle}>
                <input type="password" name="passWord" id="passWord" className={style.passWord} required/>
                <span className={highLight}></span>
                <span className={lineEffect}></span>
                <label htmlFor="passWord" className={styleUserLabel}>PassWord</label>
            </div>
            <button type= "submit"  className={style.loginBtn}> login</button>
        </form>

        
    );
};
