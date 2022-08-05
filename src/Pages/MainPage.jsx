import React from 'react';
import a from './MainPage.module.scss'
import Logotype from "../Components/Logotype/Logotype";
import StatusBar from "../Components/StatusBar/StatusBar";
import Step from "../Components/Step/Step";

const MainPage = () => {
    return (
        <div className={a.Wrapper}>
            <Logotype/>
            <div className={a.ContentWrapper}>
                <div className={a.Content}>
                    <StatusBar/>
                    <Step number="1"/>
                    <h1 className={a.HelpText}>Выберите сервис <br/>
                        <text className={a.HelpTextGreen}>Из которого </text>
                    вы хотите перенести треки</h1>
                    <div className={a.Card}>
                        <ul>
                            <h1>Spotife</h1>
                            <h1>Spotife</h1>
                            <h1>Spotife</h1>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
