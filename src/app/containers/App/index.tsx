import React from "react";
import style from "./style.css";
import { RouteComponentProps } from "react-router";
import { PureLabel } from "../../components";
import { Label } from "app/components/common/label";
import {LabelIcon} from "app/components/common/label";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

export namespace App {
    export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
    const centerElem = <div style={{ color: "white" }}>center</div>;
    const leftElem = <div style={{ color: "white" }}>left</div>;
    const rightElem = <div style={{ color: "white" }}>right</div>;
    const titleElem = <div style={{ color:"white" }}>title Element</div>
    const labelTitle = <div style={{ color:"white" }}>20-02-2020</div>
    const iconElement = <FontAwesomeIcon icon={faStopwatch} />
    
    return (
        <div className={style.normal}>
            <h4>Todo It Pure label Component</h4>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <h3>with background </h3>
                    <PureLabel
                        centreElement={centerElem}
                        backgroundColor={"#6e84ef"}
                    />
                </div><br/>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <h3>with background and radius </h3>
                    <PureLabel
                        centreElement={centerElem}
                        backgroundColor={"#6e84ef"}
                        borderRadius={15}
                    />
                </div><br/>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <h3>with background, borderRadius, left and right elem </h3>
                    <PureLabel
                        leftElement={leftElem}
                        centreElement={centerElem}
                        rightElement={rightElem}
                        backgroundColor={"#6e84ef"}
                        borderRadius={15}
                    />
                </div><br/>
                <div style={{ display: "flex", flexDirection: "row" , justifyContent: "space-between"}}>
                    <h3>with background gradient and radius </h3>
                    <PureLabel
                        centreElement={centerElem}
                        backgroundColor={["#f85032", "#f16f5c"]}
                        borderRadius={20}
                    />
                </div><br/>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <h3>with background gradient,radius and click </h3>
                    <PureLabel
                        centreElement={centerElem}
                        backgroundColor={["#f85032", "#f16f5c"]}
                        borderRadius={20}
                        onClick={() => alert("clicked")}
                    />
                </div><br/>
                <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
                    <h3>with background gradient,radius and ripple effect</h3>
                    <PureLabel
                    leftElement={leftElem}
                    centreElement={centerElem}
                    rightElement={rightElem}
                    backgroundColor={["#8BC6EC","#9599E2" ]}
                    borderRadius={30}
                    />

                </div><br/>
                <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
                    <h3>with background gradient,radius and ripple effect</h3>
                    <PureLabel
                    centreElement={centerElem}
                    backgroundColor={["#1bd26d ","#72ffc0 " ]}
                    borderRadius={30}
                    />

                </div><br/>
                <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
                    <h3>Label component </h3>
                    <Label
                    titleElement={titleElem}
                    backgroundColor={["#FBAB7E  ","#F7CE68  " ]}
                    borderRadius={30}
                    onClick={() => alert("title valid")}
                    />

                </div><br/>
                <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
                    <h3>Label component with icon </h3>
                    <LabelIcon
                    labelicon ={iconElement}
                    titleElement={labelTitle}
                    backgroundColor={["#FBAB7E  ","#F7CE68  " ]}
                    borderRadius={30}
                    onClick={() => alert("title valid")}
                    />

                </div>
            </div>
        </div>
    );
};
