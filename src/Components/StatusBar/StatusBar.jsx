import React from 'react';
import Bar from './StatusBar.module.scss'

const StatusBar = () => {
    return (
        <div className={Bar.Wrapper}>
            <div className={Bar.StatusBar}></div>
        </div>
    );
};

export default StatusBar;
