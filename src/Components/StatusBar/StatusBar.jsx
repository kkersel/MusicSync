import React from 'react';
import Bar from './StatusBar.module.scss'

const StatusBar = ({prossent, ...props}) => {
    return (
        <div className={Bar.Wrapper}>
            <progress max="100" value={prossent} className={Bar.ProgressBar}>0%</progress>
        </div>
    );
};

export default StatusBar;
