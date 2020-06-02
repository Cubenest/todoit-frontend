import React from "react";
import style from "./style.css";
import { RouteComponentProps } from "react-router";

export namespace Home {
    export interface Props extends RouteComponentProps<void> {}
}

export const Home = ({ history, location }: Home.Props) => {
    return (
        <div className={style.container}>
            <div className={style.sidebar}>
                <div className={style.logo}>logo</div>
                <div className={style.sidedBarContainer}>sidebar</div>
            </div>
            <div className={style.body}>
                <div className={style.top}>
                    <div className={style.search}>search</div>
                    <div className={style.profile}>profile</div>
                </div>
                <div className={style.body}>body</div>
            </div>
        </div>
    );
};
