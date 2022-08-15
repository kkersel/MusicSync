import React from 'react';
import style from './CheckBox.module.scss'

const CheckBox = ({title, ...props}) => {
    return (
        <div className={style.checkbox}>
            <label className={style.CustomCheckbox}>
                <input type="checkbox" name="color-1" value="indigo"/>
                    <span>{title}</span>
            </label>
        </div>
    );
};

export default CheckBox;
