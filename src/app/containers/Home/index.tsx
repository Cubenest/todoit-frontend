import React from "react";
import style from "./style.css";
import { RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SearchBar, Profile, Popover, SideBar } from "../../components";

export namespace Home {
    export interface Props extends RouteComponentProps<void> {}
}

export const Home = ({ history, location }: Home.Props) => {
    return (
        <div className={style.container}>
            {/* <div className={style.sidebar}>
                <div className={style.logo}>TodoIt</div>
                <div className={style.sidedBarContainer}>sidebar</div>
            </div> */}
            <SideBar/>
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
                            <div className={style.popovertext}> 
                                <FontAwesomeIcon
                                    className={style.smallIcon}
                                    icon={["fas", "sign-out-alt"]}
                                    size="lg"
                                />
                                Logout
                             </div>
                        </Popover>
                    </div>
                </div>
                <div className={style.body}></div>
            </div>
        </div>
    );
};
