import React from 'react';
import Logotype from "../../Components/Logotype/Logotype";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Step from "../../Components/Step/Step";
import {Fade, Slide} from "react-reveal";
import b from './Export.module.scss'
import Button from "../../Components/Button/Button";
import {NavLink} from "react-router-dom";
import a from "../Import/Import.module.scss";

const Export = () => {
    return (
        <div className={b.Wrapper}>
            <Logotype/>
            <div className={b.ContentWrapper}>
                <div className={b.Content}>
                    {/*Navigation Menu and Help Title*/}
                    <StatusBar prossent="30"/>
                    <div className={b.NavigationMenu}>
                        <Step number="2"/>
                        <NavLink className={b.HomeButton} to="/Import">
                            <Button title="Назад"/>
                        </NavLink>
                    </div>

                    <h1 className={b.HelpText}>Выберите сервис <br/>
                        <Slide left>
                            <text className={b.HelpTextGreen}>В который</text>
                        </Slide>
                        вы хотите перенести треки
                    </h1>

                    {/* Export Cards*/}
                    <Fade right>
                        <div className={b.Card}>
                            <ul>
                                <NavLink className={b.LinkServices} to="/Choose">
                                    <li className={b.ServicesWrapper}>
                                        <img src="../images/Services/Spotify.png" alt=""/>
                                        <h1 className={b.ServicesTitle}>Spotify</h1>
                                    </li>
                                </NavLink>
                                <a className={b.LinkServices} href="https://music.yandex.ru/">
                                    <li className={b.ServicesWrapper}>
                                        <img src="../images/Services/Yandex.png" alt=""/>
                                        <h1 className={b.ServicesTitle}>Yandex Music</h1>
                                    </li>
                                </a>
                                <a className={b.LinkServices} href="https://music.apple.com/ru/">
                                    <li className={b.ServicesWrapper}>
                                        <img src="../images/Services/Apple.png" alt=""/>
                                        <h1 className={b.ServicesTitle}>Apple Music</h1>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
};

export default Export;
