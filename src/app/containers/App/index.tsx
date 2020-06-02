import React, { useState } from "react";
import style from "./style.css";

import { RouteComponentProps } from "react-router";
import * as moment from "moment";
import { PureLabel } from "../../components";
import { Label } from "app/components/common/label";
import { LabelIcon } from "app/components/common/label";

import { CheckBox } from "app/components/common/checkbox";
import { SegmentButton } from "app/components/common/segmentbutton";

import { SearchBar } from "app/components/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DueDate } from "app/components/duedate";
import { Login } from "app/components/Loginpage";
import { SideBar } from "app/components/sidebar";

export namespace App {
    export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
    const centerElem = <div style={{ color: "white" }}>center</div>;
    const leftElem = <div style={{ color: "white" }}>left</div>;
    const rightElem = <div style={{ color: "white" }}>right</div>;
    const titleElem = <div style={{ color: "white" }}>title Element</div>;
    const labelTitle = <div style={{ color: "black" }}>20-02-2020</div>;
    const iconElement = <FontAwesomeIcon icon={["fas", "stopwatch"]} />;
    const segmentButtonElement = <div>Todo</div>;
    const [isChecked, setIsChecked] = useState(false);
    const dueDateElem = moment().add(2, "days").toDate();
    const toDateElem = new Date();

    return (
        <div className={style.normal}>
            <h4>Todo It Pure label Component</h4>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h3>with background </h3>
                            <PureLabel
                                centreElement={centerElem}
                                backgroundColor={"#6e84ef"}
                            />
                        </div>
                        <br />

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>with background and radius </h3>
                            <PureLabel
                                centreElement={centerElem}
                                backgroundColor={"#6e84ef"}
                                borderRadius={15}
                            />
                        </div>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>
                                with background, borderRadius, left and right
                                elem{" "}
                            </h3>
                            <PureLabel
                                leftElement={leftElem}
                                centreElement={centerElem}
                                rightElement={rightElem}
                                backgroundColor={"#6e84ef"}
                                borderRadius={15}
                            />
                        </div>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>with background gradient and radius </h3>
                            <PureLabel
                                centreElement={centerElem}
                                backgroundColor={["#f85032", "#f16f5c"]}
                                borderRadius={20}
                            />
                        </div>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>with background gradient,radius and click </h3>
                            <PureLabel
                                centreElement={centerElem}
                                backgroundColor={["#f85032", "#f16f5c"]}
                                borderRadius={20}
                                onClick={() => alert("clicked")}
                            />
                        </div>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>
                                with background gradient,radius and ripple
                                effect
                            </h3>
                            <PureLabel
                                leftElement={leftElem}
                                centreElement={centerElem}
                                rightElement={rightElem}
                                backgroundColor={["#8BC6EC", "#9599E2"]}
                                borderRadius={30}
                            />
                        </div>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>
                                with background gradient,radius and ripple
                                effect
                            </h3>
                            <PureLabel
                                centreElement={centerElem}
                                backgroundColor={["#1bd26d ", "#72ffc0 "]}
                                borderRadius={30}
                                onClick={() => console.log("title valid")}
                            />
                        </div>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>Label component </h3>
                            <Label
                                titleElement={titleElem}
                                backgroundColor={["#FBAB7E  ", "#F7CE68  "]}
                                onClick={() => alert("title valid")}
                            />
                        </div>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>Label component with icon </h3>
                            <LabelIcon
                                labelIcon={iconElement}
                                titleElement={labelTitle}
                                backgroundColor={["#1bd26d ", "#72ffc0 "]}
                            />
                        </div>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>checkbox component with icon </h3>

                            <CheckBox
                                isChecked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>segmentbutton component with icon </h3>
                            <SegmentButton
                                title={segmentButtonElement}
                                isSelected={isChecked}
                                count={5}
                                onClick={() => setIsChecked(!isChecked)}
                            />
                        </div>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>Duedate component </h3>
                            <DueDate
                                // dateTime={true}
                                isComplete={false}
                                dateTime={dueDateElem}
                                toDate={toDateElem}
                            />
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <SearchBar />
            <Login />
            <SideBar/>
        </div>
    );
};
