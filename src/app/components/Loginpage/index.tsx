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
            <h2>TODOIT</h2><br/>
            <h3>welcome back!! Please login to your account. </h3><br/>
            <div className={fromGroupStyle}>
                <input type="text" name="userName" id="userName" className={style.userName} required/>
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
            <div className={style.forgotpass}>
            <a  href="#">Forgot Password ??</a>
            </div>
            
            <br/>
            <div style={{display: "flex",flexDirection: "row",justifyContent: "space-between",}}>
                
                <button type= "submit"  className={style.loginBtn}> login</button>
                <button type= "submit"  className={style.signUpBtn}> Signup</button>
            </div>
            <br/>
            OR
            <div style={{display: "flex",flexDirection: "row",justifyContent: "space-between",marginTop:"60px"}}>
                
                <button type= "submit"  className={style.signUpBtn}><FontAwesomeIcon icon={["fas", "google"]} /> Google</button>
                <button type= "submit"  className={style.signUpBtn}><FontAwesomeIcon icon={["fas", "facebook"]} /> Facebook</button>
            </div>
            
        </form>

        
    );
};
