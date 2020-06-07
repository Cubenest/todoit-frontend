import React from "react";
import style from "./style.css";
import loader from "../../../../assets/loader.gif";

interface LoaderCompProps {}

export const LoaderComp: React.FC<LoaderCompProps> = () => {
    return (
        <div className={style.container}>
            <img
                src={loader}
                alt="loader"
                style={{ width: 200, height: 200 }}
            />
        </div>
    );
};
