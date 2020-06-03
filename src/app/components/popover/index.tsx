import React from "react";
import classNames from "classnames";

import style from "./style.css";

interface PopoverContentProps {
    onClose?: () => void;
    closeOnClick?: any;
    onClickOutSide?: () => void;
    className?: string;
    placement?: string;
    showArrow?: boolean;
    style?: any;
}

class PopoverContent extends React.Component<PopoverContentProps> {
    node: any;

    handleClickOutSide(e: any) {
        if (this.node) {
            if (this.props.closeOnClick) {
                this.props.onClose && this.props.onClose();
            } else {
                if (!this.node.contains(e.target)) {
                    this.props.onClickOutSide && this.props.onClickOutSide();
                }
            }
        }
    }

    componentDidMount() {
        this.node && this.node.focus();
        window.document.addEventListener(
            "click",
            this.handleClickOutSide.bind(this),
            false
        );
    }

    componentWillUnmount() {
        this.node && this.node.blur();
        window.document.removeEventListener(
            "click",
            this.handleClickOutSide.bind(this),
            false
        );
    }

    onKeyDown(e: any) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            this.props.onClose && this.props.onClose();
        }
    }

    render() {
        return (
            <div
                ref={(node) => (this.node = node)}
                tabIndex={-1}
                onKeyDown={this.onKeyDown.bind(this)}
                className={classNames(
                    style.popoverContent,
                    this.props.className ? this.props.className : "",
                    this.props.placement ? this.props.placement : "",
                    this.props.showArrow ? style.arrow : ""
                )}
                style={this.props.style}
            >
                <div className={style.popoverInner}>{this.props.children}</div>
            </div>
        );
    }
}

interface PopOverState {
    visible: boolean;
}

interface PopOverProps {
    visible?: boolean;
    onClickOutSide?: any;
    triggerNode: React.ReactElement;
    trigger: string;
    showArrow: boolean;
    placement?: string;
    closeOnClick?: any;
    className?: string;
    style?: any;
}

export class Popover extends React.Component<PopOverProps, PopOverState> {
    constructor(props: PopOverProps) {
        super(props);
        this.state = {
            visible: !!this.props.visible,
        };
    }

    onShow(e: any) {
        e.stopPropagation();
        this.setState({ visible: true });
    }

    onClose() {
        this.setState({ visible: false });
    }

    onToggle(e: any) {
        e.stopPropagation();
        this.setState({ visible: !this.state.visible });
    }

    onClickOutSide() {
        this.onClose();
        this.props.onClickOutSide && this.props.onClickOutSide();
    }

    render() {
        return (
            <div className={style.popover}>
                {this.props.triggerNode &&
                    React.cloneElement(this.props.triggerNode, {
                        onClick:
                            this.props.trigger === "click" ||
                            this.props.trigger === "hover"
                                ? this.onToggle.bind(this)
                                : null,
                        onMouseOver:
                            this.props.trigger === "hover"
                                ? this.onShow.bind(this)
                                : null,
                    })}

                {this.state.visible && (
                    <PopoverContent
                        showArrow={this.props.showArrow}
                        placement={this.props.placement}
                        closeOnClick={this.props.closeOnClick}
                        onClickOutSide={this.onClickOutSide.bind(this)}
                        className={this.props.className}
                        style={this.props.style}
                        onClose={this.onClose.bind(this)}
                    >
                        {this.props.children}
                    </PopoverContent>
                )}
            </div>
        );
    }
}

//   class App extends React.Component {
//     onMenuItemClick(item) {
//       console.log(item);
//     }

//     render() {
//       return (
//         <div className="app">
//           <div className="il-bl">
//             <Popover
//               showArrow
//               triggerNode={<button>Click me</button>}
//               trigger='click'
//             >
//               <div className="p-20">
//                 <div className="il-bl">
//                   <Popover
//                     showArrow
//                     triggerNode={<button>Click me</button>}
//                     trigger='click'
//                   >
//                     <div className="p-20">
//                       <Popover
//                         showArrow
//                         triggerNode={<button>Click me</button>}
//                         trigger='click'
//                       >
//                         <div className="p-20">
//                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quam sunt, possimus, dolores cumque blanditiis minima magnam. Accusantium ducimus iusto incidunt. Hic nulla, quia quasi quos nobis nemo, iure! Consectetur dolorum ipsam, exercitationem! Natus sunt dignissimos deleniti numquam cupiditate perspiciatis eaque doloribus! Sunt odit porro velit repudiandae, consequatur, amet ut.
//                         </div>
//                       </Popover>
//                     </div>
//                   </Popover>
//                 </div>

//                 <div className="il-bl" style={{marginLeft: '10px'}}>
//                   <Popover
//                     triggerNode={<button>Hover me</button>}
//                     trigger='hover'
//                     closeOnClick
//                   >
//                     <ul className="context-menu">
//                       {/*eslint-disable*/}
//                       <li className="context-menu-item">
//                         <a
//                           href="#"
//                           className="context-menu-link"
//                           onClick={this.onMenuItemClick.bind(this, 1)}
//                         >item 1</a>
//                       </li>
//                       <li className="context-menu-item">
//                         <a
//                           href="#"
//                           className="context-menu-link"
//                           onClick={this.onMenuItemClick.bind(this, 2)}
//                         >item 2</a>
//                       </li>
//                       <li className="context-menu-item">
//                         <a
//                           href="#"
//                           className="context-menu-link"
//                           onClick={this.onMenuItemClick.bind(this, 3)}
//                         >item 3</a>
//                       </li>
//                       <li className="context-menu-item">
//                         <a
//                           href="#"
//                           className="context-menu-link"
//                           onClick={this.onMenuItemClick.bind(this, 4)}
//                         >item 4</a>
//                       </li>
//                       <li className="context-menu-item">
//                         <a
//                           href="#"
//                           className="context-menu-link"
//                           onClick={this.onMenuItemClick.bind(this, 5)}
//                         >item 5</a>
//                       </li>
//                     {/*eslint-enable*/}
//                     </ul>
//                   </Popover>
//                 </div>
//               </div>
//             </Popover>
//           </div>
//         </div>
//       );
//     }
//   }

//   ReactDOM.render(<App />, document.getElementById('root'));
