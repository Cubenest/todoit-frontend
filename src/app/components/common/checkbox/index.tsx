import * as React from "react";
import style from "./style.css";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



interface checkBoxProps{
    label ?: React.ReactChild;
    color?: string[];
    isChecked?:boolean;
    disabled?:boolean;
    onChange?: React.FormEventHandler<HTMLElement>;
    compStyle?: React.CSSProperties;
  }

export const CheckBox: React.FC<checkBoxProps> = ({label,color,isChecked,disabled,onChange,compStyle,}) => {
    

    const handler = !disabled ? onChange : undefined;
    const styleCheckBox = classNames(style.checkBox);

    return (

                <div className={styleCheckBox}>
                  <label className={style.label}>
                    <input  
                    className={style.label__checkbox} 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={handler}
                     />
                    <span className={style.label__text}>
                    <span className={style.label__check}>
                    <FontAwesomeIcon icon={faCheck} />
                    </span>
                    </span>
                  </label>
                </div>  
        
    );
    
};
