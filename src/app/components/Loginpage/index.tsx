import React, { useState, useEffect, useRef } from "react";
import style from "./style.css";
import classNames from "classnames";
import logo from "../../../assets/logo.png";

interface FormProps {
    option: number;
    onClickFacebook: (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    onClickGoogle: (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    onSubmit: (type: string, value: any) => void;
}

export const optionsMap: any = {
    1: "signin",
    2: "signup",
    3: "forgot",
    4: "reset",
};
export const Form: React.FC<FormProps> = ({
    option,
    onClickFacebook,
    onClickGoogle,
    onSubmit,
}) => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const confirmPassword = useRef<HTMLInputElement>(null);

    return (
        <form
            className={style.accountForm}
            onSubmit={(evt) => evt.preventDefault()}
        >
            <div
                className={classNames(
                    style.accountFormFields,
                    option === 1
                        ? style.signIn
                        : option === 2
                        ? style.signUp
                        : option === 3
                        ? style.forgot
                        : style.reset
                )}
            >
                {option !== 4 && (
                    <input
                        ref={email}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        required
                    />
                )}
                <input
                    id="password"
                    name="password"
                    type="password"
                    ref={password}
                    placeholder="Password"
                    pattern=".{2,}"
                    required={
                        option === 1 || option === 2 || option === 4
                            ? true
                            : false
                    }
                    disabled={option === 3 ? true : false}
                />
                <input
                    id="repeat-password"
                    name="repeat-password"
                    type="password"
                    ref={confirmPassword}
                    onFocus={() =>
                        confirmPassword.current?.setCustomValidity("")
                    }
                    placeholder="Repeat password"
                    required={option === 2 ? true : false}
                    disabled={option === 1 || option === 3 ? true : false}
                />
            </div>
            <button
                className={style.btnSubmitForm}
                type="submit"
                onClick={(e) => {
                    if (
                        option === 2 &&
                        password.current?.value !==
                            confirmPassword.current?.value
                    ) {
                        confirmPassword.current?.setCustomValidity(
                            "Passwords Don't Match"
                        );
                    }
                    onSubmit(optionsMap[option], {
                        email: email.current?.value,
                        password: password.current?.value,
                        confirmPassword: confirmPassword.current?.value,
                    });
                }}
                onSubmit={(e) => {
                    if (
                        option === 2 &&
                        password.current?.value !==
                            confirmPassword.current?.value
                    ) {
                        confirmPassword.current?.setCustomValidity(
                            "Passwords Don't Match"
                        );
                    }
                    onSubmit(optionsMap[option], {
                        email: email.current?.value,
                        password: password.current?.value,
                        confirmPassword: confirmPassword.current?.value,
                    });
                }}
            >
                {option === 1
                    ? "Sign in"
                    : option === 2
                    ? "Sign up"
                    : "Reset password"}
            </button>
            {/* {option !== 4 && (
                <div style={{ marginTop: 5, marginBottom: 5 }}>OR</div>
            )}
            {option !== 4 && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                        className={classNames(style.loginBtn, style.facebook)}
                        type="button"
                        onClick={onClickFacebook}
                    >
                        Login with Facebook
                    </button>

                    <button
                        className={classNames(style.loginBtn, style.google)}
                        type="button"
                        onClick={onClickGoogle}
                    >
                        Login with Google
                    </button>
                </div>
            )} */}
        </form>
    );
};

interface LoginProps {
    onClickFacebook: (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    onClickGoogle: (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    onSubmit: (type: string, value: any) => void;
    token: string | undefined;
    option: number;
    onClick: (
        ev: React.MouseEvent<HTMLElement, MouseEvent>,
        value: number
    ) => void;
}

export const Login: React.FC<LoginProps> = ({
    onClickFacebook,
    onClickGoogle,
    onSubmit,
    token,
    option,
    onClick,
}) => {
    return (
        <div>
            <div className={style.logo}>
                <img src={logo} alt="logo" className={style.image} />
            </div>
            <div className={style.container}>
                <header>
                    <div
                        className={classNames(
                            style.headerHeadings,
                            "drop-shadow-all",
                            option === 1
                                ? style.signIn
                                : option === 2
                                ? style.signUp
                                : style.forgot
                        )}
                    >
                        <span>Sign in to your account</span>
                        <span>Create an account</span>
                        <span>Reset your password</span>
                    </div>
                </header>
                {option !== 4 && (
                    <ul className={style.options}>
                        <li
                            className={option === 1 ? style.active : ""}
                            onClick={(e) => onClick(e, 1)}
                        >
                            Sign in
                        </li>
                        <li
                            className={option === 2 ? style.active : ""}
                            style={{ marginLeft: "15px" }}
                            onClick={(e) => onClick(e, 2)}
                        >
                            Sign up
                        </li>
                        <li
                            className={option === 3 ? style.active : ""}
                            style={{ marginLeft: "auto" }}
                            onClick={(e) => onClick(e, 3)}
                        >
                            Forgot
                        </li>
                    </ul>
                )}
                <Form
                    option={option}
                    onClickGoogle={onClickGoogle}
                    onClickFacebook={onClickFacebook}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
};
