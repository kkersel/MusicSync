import React from 'react';
import s from './Step.module.scss'

const Step = ({number}) => {
    return (
        <div className={s.StepWrapper}>
            <div className={s.Circle}>
                <p className={s.Number}>{number}</p>
            </div>
            <h1  className={s.Text}>Шаг</h1>
        </div>
    );
};

export default Step;
