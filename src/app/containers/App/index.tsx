import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import * as moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.css";
import {
    DueDate,
    SegmentButton,
    CheckBox,
    LabelIcon,
    Label,
    PureLabel,
    Title,
    TodoItem,
    LabelContainer,
    SegmentContainer,
    SearchBar,
    SideBar,
    Login,
    Register,
    GroupItem,
    WarningMessage,
    SucessMessage,
    LoaderComp,
} from "app/components";
import {ErrorMessage} from "app/components/common/errormessage";
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
    const [selected, setSelected] = useState(0);
    const dueDateElem = moment().add(2, "days").toDate();
    const toDateElem = new Date();

    // GroupItem
    
    const [Edited, setEdited] = useState(false);

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
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>Todoitem component </h3>
                            <TodoItem
                                checkBox={
                                    <CheckBox
                                        isChecked={false}
                                        onChange={() => null}
                                    />
                                }
                                title={
                                    <Title
                                        title={"Pick up kids from school"}
                                        fontSize={20}
                                    />
                                }
                                dueDate={
                                    <DueDate
                                        isComplete={true}
                                        dateTime={dueDateElem}
                                        toDate={toDateElem}
                                    />
                                }
                                label={
                                    <LabelContainer
                                        items={["label1", "label2"]}
                                    />
                                }
                                onClick={() => console.log("ok")}
                                additionalStyle={""}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>segmentbutton container</h3>
                            <SegmentContainer
                                items={[
                                    { label: "ToDo", count: 6 },
                                    { label: "Done", count: 10 },
                                ]}
                                selectedIndex={selected}
                                onChange={(e, i) => setSelected(i)}
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
                            <h3>Group item Component</h3>
                            <GroupItem
                            title={"Add Group"}
                            isEdit={false}
                            />
                            
                        </div>
                        <br/>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>Error message item Component</h3>
                            <ErrorMessage
                            message={"error message "}
                            compStyle={style.dropshadowall}
                            />
                        </div><br/>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>Error message item Component</h3>
                            <WarningMessage
                            message={"Warning message "}
                            compStyle={style.dropshadowall}
                            />
                        </div><br/>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>Error message item Component</h3>
                            <SucessMessage
                            message={"Sucess message "}
                            compStyle={style.dropshadowall}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3>Error message item Component</h3>
                            <LoaderComp
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Login /> */}
            <Register />
        </div>
    );
};
