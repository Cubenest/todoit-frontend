import React from "react";
import style from "./style.css";
import { RouteComponentProps } from "react-router";

import { SearchBar, Profile, Popover } from "../../components";

export namespace Home {
    export interface Props extends RouteComponentProps<void> {}
}

export const Home = ({ history, location }: Home.Props) => {
    return (
        <div className={style.container}>
            <div className={style.sidebar}>
                <div className={style.logo}>TodoIt</div>
                <div className={style.sidedBarContainer}>sidebar</div>
            </div>
            <div className={style.body}>
                <div className={style.top}>
                    <div className={style.search}>
                        <SearchBar
                            onChange={(e) => console.log(e)}
                            onFocus={() => console.log(focus)}
                        />
                    </div>
                    <div className={style.profile}>
                        <Popover
                            showArrow={true}
                            triggerNode={
                                <div>
                                    <Profile label={"Harish"} />
                                </div>
                            }
                            trigger="click"
                        >
                            <div>test</div>
                        </Popover>
                    </div>
                </div>
                <div className={style.body}></div>
            </div>
        </div>
    );
};
