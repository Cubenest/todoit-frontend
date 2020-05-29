import React from "react";
import style from "./style.css";
export interface makeExpandingProps {
    loading?: boolean;
}

interface makeExpandingState {
    isOpen: boolean;
}

export const makeExpanding = <P extends object>(
    Component: React.ComponentType<P>
) =>
    class makeExpanding extends React.Component<P & makeExpandingProps> {
        state: makeExpandingState = {
            isOpen: false,
        };

        onClick = () => {
            this.setState({ isOpen: !this.state.isOpen });
        };
        render() {
            return (
                <Component
                    {...(this.props as P)}
                    isOpen={this.state.isOpen}
                    onClick={this.onClick}
                    onFocus={this.onClick}
                    additionalStyles={style.animation}
                />
            );
        }
    };
