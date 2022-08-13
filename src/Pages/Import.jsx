import React from 'react';
import a from './Import.module.scss'
import Logotype from "../Components/Logotype/Logotype";
import StatusBar from "../Components/StatusBar/StatusBar";
import Step from "../Components/Step/Step";
import {Fade, Slide} from "react-reveal";
import {NavLink} from "react-router-dom";

const Import = () => {
    return (
        <div className={a.Wrapper}>
            <Logotype/>
                <div className={a.ContentWrapper}>
                    <div className={a.Content}>
                        <StatusBar prossent="0"/>
                            <Step number="1"/>
                            <h1 className={a.HelpText}>Выберите сервис <br/>
                                <Slide left>
                                <text className={a.HelpTextGreen}>Из которого </text>
                                </Slide>
                                вы хотите перенести треки
                            </h1>
                        <Fade right>
                            <div className={a.Card}>
                                <ul>
                                    <NavLink className={a.LinkServices} to="/Export">
                                        <div className={a.ServicesWrapper}>
                                            <img src="../images/Services/Spotify.png" alt=""/>
                                            <h1 className={a.ServicesTitle}>Spotify</h1>
                                        </div>
                                    </NavLink>
                                    <NavLink className={a.LinkServices} to="/Export">
                                        <div className={a.ServicesWrapper}>
                                            <img src="../images/Services/Yandex.png" alt=""/>
                                            <h1 className={a.ServicesTitle}>Yandex Music</h1>
                                        </div>
                                    </NavLink>
                                    <NavLink className={a.LinkServices} to="/Export">
                                        <div className={a.ServicesWrapper}>
                                            <img src="../images/Services/Apple.png" alt=""/>
                                            <h1 className={a.ServicesTitle}>Apple Music</h1>
                                        </div>
                                    </NavLink>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>
        </div>
    )
};

export default Import;
