import React, { useState,useEffect,useRef } from "react";
import style from "./style.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface LoginProps {
    onChange?: React.ChangeEventHandler;
    compStyle?: string;
    customer?:string;
    email?: any;
    password?: any;
}

// function useInputValue(initialValue) {
//     const [value, setValue] = useState(initialValue)
  
//     function retrieveValue(event) {
//       setValue(event.target.value)
//     }
//     return [value, retrieveValue]
//   }
export const Login: React.FC<LoginProps> = ({
    onChange,
    compStyle,
    customer,
   
}) => {
    const fromGroupStyle = classNames(style.groupcontainer);
    const highLight = classNames(style.highlight);
    const lineEffect = classNames(style.bar);
    const styleUserLabel = classNames(style.label);
    const styleFormSection = classNames(style.form);
   
    // const [email, setEmail] = useInputValue('')
    // const [password, setPassword] = useInputValue('')
    // const [errors, setErrors] = useState({})

    // const handleSignUp= () => {
    //     const errors = validateForm({  email, password })
    //     setErrors(errors)
    //     if (!Object.keys(errors).length) {
    //       doSignUp({ email, password })
    //     }
    //   }
    // const validateEmail= (email:any) => {
    //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }
    // const validateForm= (values:any) => {
    //   const errors = {
    //       email : "",
    //       password : "",
    //   }
    //   if (!values.email) errors.email = "Email address is required"
    //   else if (!validateEmail(values.email)) errors.email = "Not a valid email address"
    //   if (!values.password) errors.password = "Password is required"
    //   else if (!validateEmail(values.password)) errors.password = "Min 8 Charecters Required"
      
    
    //   return errors
    // }
    // const doSignUp= (email:"", password:"") => {
    //     console.log(errors);
    // }
    return (
        
        <form className={styleFormSection}
        //  onSubmit={()=>handleSignUp}
         >
            <h2>TODOIT</h2><br/>
            <h3>welcome back!! Please login to your account. </h3><br/>
            <div className={fromGroupStyle}>
                <input type="text" name="userName" id="userName"
                 className={style.userName} 
                //  onChange={setEmail}
                //  value={email}
                 required
                 />
                
                <span className={highLight}></span>
                <span className={lineEffect}></span>
                <label htmlFor="userName" className={styleUserLabel}>
                    <FontAwesomeIcon
                        className={style.smallIcon}
                        icon={["fas", "envelope"]}
                        size="sm"
                    /> {""} Enter User Name
                </label>
                {/* {errors.email && <p className={style.errormessage}>{errors.email}</p>} */}
                
            </div>
            <br/>
            <div className={fromGroupStyle}>
                <input type="password" name="passWord" id="passWord" 
                className={style.passWord} 
                // onChange={setPassword}
                // value={password}
                required
                />
                <span className={highLight}></span>
                <span className={lineEffect}></span>
                <label htmlFor="passWord" className={styleUserLabel}>
                    <FontAwesomeIcon
                        className={style.smallIcon}
                        icon={["fas", "key"]}
                        size="sm"
                        /> {""} PassWord
                </label>
                {/* {errors.password && <p className={style.errormessage}>{errors.password}</p>} */}
            </div>
            <div className={style.forgotpass}>
            <a  href="#">Forgot Password ??</a>
            </div>
            
            <br/>
            <div style={{display: "flex",flexDirection: "row",justifyContent: "space-between",}}>
                
                <button type= "button"  className={style.loginBtn} 
                // onClick={handleSignUp}
                > login</button>
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
