import React from 'react';
import Logotype from "../Components/Logotype/Logotype";
import StatusBar from "../Components/StatusBar/StatusBar";
import Step from "../Components/Step/Step";
import {Fade, Slide} from "react-reveal";
import a from './Export.module.scss'
import Button from "../Components/Button/Button";
import {NavLink} from "react-router-dom";
import x from "./ContactsPage.module.scss";

const Export = () => {
    return (
        <div className={a.Wrapper}>
            <Logotype/>
            <Fade right>
                <div className={a.ContentWrapper}>
                    <div className={a.Content}>
                        <StatusBar/>
                        <div className={a.NavigationMenu}>
                            <Step number="2"/>
                            <NavLink className={a.HomeButton} to="/Import">
                                <Button title="Назад"/>
                            </NavLink>
                        </div>
                        <h1 className={a.HelpText}>Выберите сервис <br/>
                            <text className={a.HelpTextGreen}>Из которого</text>
                            вы хотите перенести треки
                        </h1>
                        <div className={a.Card}>
                            <ul>
                                <a className={a.LinkServices} href="https://spotify.com">
                                    <li className={a.ServicesWrapper}>
                                        <img src="../images/Services/Spotify.png" alt=""/>
                                        <h1 className={a.ServicesTitle}>Spotify</h1>
                                    </li>
                                </a>
                                <a className={a.LinkServices} href="https://music.yandex.ru/">
                                    <li className={a.ServicesWrapper}>
                                        <img src="../images/Services/Yandex.png" alt=""/>
                                        <h1 className={a.ServicesTitle}>Yandex Music</h1>
                                    </li>
                                </a>
                                <a className={a.LinkServices} href="https://music.apple.com/ru/">
                                    <li className={a.ServicesWrapper}>
                                        <img src="../images/Services/Apple.png" alt=""/>
                                        <h1 className={a.ServicesTitle}>Apple Music</h1>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Export;
