import React from 'react';
import x from "./Button.module.scss"
import {NavLink} from "react-router-dom";

const Button = ({title, ...props}) => {
    return (
        <div className={x.Button}>
            {title}
        </div>
    );
};

export default Button;
