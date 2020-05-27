import React from "react";
import style from "./style.css";
import { RouteComponentProps } from "react-router";
import { PureLabel } from "../../components";
export namespace App {
    export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
    const centerElem = <div style={{ color: "white" }}>center</div>;
    const leftElem = <div style={{ color: "white" }}>left</div>;
    const rightElem = <div style={{ color: "white" }}>right</div>;

    return (
        <div className={style.normal}>
            <h4>Examples</h4>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3>with background </h3>
                    <PureLabel
                        centreElement={centerElem}
                        backgroundColor={"#6e84ef"}
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3>with background and radius </h3>
                    <PureLabel
                        centreElement={centerElem}
                        backgroundColor={"#6e84ef"}
                        borderRadius={15}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3>with background, borderRadius, left and right elem </h3>
                    <PureLabel
                        leftElement={leftElem}
                        centreElement={centerElem}
                        rightElement={rightElem}
                        backgroundColor={"#6e84ef"}
                        borderRadius={15}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3>with background gradient and radius </h3>
                    <PureLabel
                        centreElement={centerElem}
                        backgroundColor={["#f85032", "#f16f5c"]}
                        borderRadius={20}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3>with background gradient,radius and click </h3>
                    <PureLabel
                        centreElement={centerElem}
                        backgroundColor={["#f85032", "#f16f5c"]}
                        borderRadius={20}
                        onClick={() => alert("clicked")}
                    />
                </div>
            </div>
        </div>
    );
};
