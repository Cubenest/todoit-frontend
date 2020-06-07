import React, { useState, useEffect } from "react";
import { Login, optionsMap, Modal } from "../../components";
import style from "./style.css";
import authService from "app/services/auth.service";
import { useParams } from "react-router";
import { history } from "app/utils";
export interface LoginProps {}

export const LoginPage: React.FC<LoginProps> = ({}) => {
    const [error, setError] = useState({ error: false, msg: "" });
    const [option, setOption] = useState(1);

    const { token } = useParams();
    console.log("token", token);
    useEffect(() => {
        if (token) {
            setOption(4);
            (async function asynFunc(token) {
                try {
                    await authService.verifyToken(token);
                } catch (error) {
                    //TODO: handle error
                    console.log("error", error.response);
                }
            })(token);
        }
        const authUser = authService.getCurrentUser();
        if (authUser) {
            history.push("/", { user: authUser });
        }
    }, []);

    const handleLogin = async (type: string, value: any) => {
        try {
            switch (type) {
                case optionsMap[1]:
                    const token =
                        value.email &&
                        value.password &&
                        (await authService.login(value.email, value.password));
                    console.log("handleLogin -> token", token);

                    break;
                case optionsMap[2]:
                    value.email &&
                        value.password &&
                        value.confirmPassword &&
                        value.password === value.confirmPassword &&
                        value.confirmPassword(
                            await authService.register(
                                value.email,
                                value.password,
                                value.confirmPassword
                            )
                        );
                    setOption(1);

                    break;
                case optionsMap[3]:
                    const res =
                        value.email &&
                        (await authService.forgotPassword(value.email));
                    console.log("handleLogin -> res", res);

                    setError({ error: true, msg: res.data.msg });
                    break;
                case optionsMap[4]:
                    const reset =
                        token &&
                        value.password &&
                        value.confirmPassword &&
                        value.password === value.confirmPassword &&
                        (await authService.resetPassword(
                            token,
                            value.password,
                            value.confirmPassword
                        ));
                    setOption(1);
                    console.log("handleLogin -> reset", reset);

                // setError({ error: true, msg: reset.data.msg });
            }
        } catch (error) {
            setError({ error: true, msg: error.response.data.msg });
            console.log("handleLogin -> error", error.response);
        }
    };
    return (
        <div className={style.container}>
            <Modal
                isModalOpen={error.error}
                closeModal={() => setError({ error: false, msg: "" })}
            >
                <p>{error.msg}</p>
            </Modal>
            <Login
                onClickFacebook={(e) => console.log(e)}
                onClickGoogle={(e) => console.log(e)}
                onSubmit={handleLogin}
                token={token}
                onClick={(e, v) => setOption(v)}
                option={option}
            />
        </div>
    );
};
