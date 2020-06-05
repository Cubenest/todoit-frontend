import React, { useState } from "react";
import style from "../Loginpage/style.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface RegisterProps {
    onChange?: React.ChangeEventHandler;
    compStyle?: string;
}

export const Register: React.FC<RegisterProps> = ({
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
            <h2>Sign Up Here !!!</h2><br/>
            <h3>Please fill below fields... </h3><br/>
            <div className={fromGroupStyle}>
                <input type="email" name="userName" id="userName" className={style.userName} required/>
                <span className={highLight}></span>
                <span className={lineEffect}></span>
                <label htmlFor="userName" className={styleUserLabel}>
                    <FontAwesomeIcon
                        className={style.smallIcon}
                        icon={["fas", "envelope"]}
                        size="sm"
                    /> {""} Enter User Name
                </label>
            </div>
            <br/>
            <div className={fromGroupStyle}>
                <input type="password" name="passWord" id="passWord" className={style.passWord} required/>
                <span className={highLight}></span>
                <span className={lineEffect}></span>
                <label htmlFor="passWord" className={styleUserLabel}>
                    <FontAwesomeIcon
                        className={style.smallIcon}
                        icon={["fas", "key"]}
                        size="sm"
                        /> {""} PassWord
                </label>
            </div>
            <br/>
            <div className={fromGroupStyle}>
                <input type="password" name="passWord" id="passWord" className={style.passWord} required/>
                <span className={highLight}></span>
                <span className={lineEffect}></span>
                <label htmlFor="passWord" className={styleUserLabel}>
                    <FontAwesomeIcon
                        className={style.smallIcon}
                        icon={["fas", "key"]}
                        size="sm"
                        /> {""} Confirm PassWord
                </label>
            </div>
         
            <br/>
            <button type= "submit"  className={style.loginBtn}> Sign Up</button>
          
        </form>

        
    );
};
