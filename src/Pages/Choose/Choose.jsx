import React from 'react';
import c from './Choose.module.scss'
import Logotype from "../../Components/Logotype/Logotype";
import StatusBar from "../../Components/StatusBar/StatusBar";
import Step from "../../Components/Step/Step";
import {NavLink} from "react-router-dom";
import Button from "../../Components/Button/Button";
import {Fade, Slide} from "react-reveal";
import CheckBox from "../../Components/CheckBox/CheckBox";

const Choose = () => {
    return (
        <div className={c.Wrapper}>
            <Logotype/>
            <div className={c.ContentWrapper}>
                <div className={c.Content}>
                    {/*Navigation Menu and Help Title*/}
                    <div className={c.NavigationMenu}>
                        <StatusBar prossent="80"/>
                        <div className={c.StepButton}>
                            <Step number="3"/>
                            <NavLink className={c.HomeButton} to="/Export">
                                <Button title="Назад"/>
                            </NavLink>
                        </div>
                        <h1 className={c.HelpText}>Выберите, что хотите <br/> перенести</h1>
                    </div>

                    {/* Choose Cards*/}
                    <Fade right>
                        <div className={c.CardButton}>
                            <div className={c.Card}>

                                {/*Header*/}
                                <div className={c.HeaderList}>
                                    <CheckBox/>
                                    <h1 className={c.HeaderText}>Выбрать все</h1>
                                    <h1 className={c.HeaderText}>Название</h1>
                                    <h1 className={c.HeaderText}>Количество</h1>
                                </div>

                                <div className={c.WrapperLine}>

                                    <div className={c.List}>
                                        <CheckBox/>
                                        <img src="./images/Services/Spotify.png" alt=""/>
                                        <h1 className={c.NameSound}>Name</h1>
                                        <h1 className={c.HeaderText}>132</h1>
                                    </div>
                                    <div className={c.List}>
                                        <CheckBox/>
                                        <img src="./images/Services/Spotify.png" alt=""/>
                                        <h1 className={c.NameSound}>rkmformfoi3m4fim34</h1>
                                        <h1 className={c.HeaderText}>132</h1>
                                    </div>
                                    <div className={c.List}>
                                        <CheckBox/>
                                        <img src="./images/Services/Spotify.png" alt=""/>
                                        <h1 className={c.NameSound}>IMd9wmidom2dm2md</h1>
                                        <h1 className={c.HeaderText}>1322</h1>
                                    </div>
                                    <div className={c.List}>
                                        <CheckBox/>
                                        <img src="./images/Services/Spotify.png" alt=""/>
                                        <h1 className={c.NameSound}>Name</h1>
                                        <h1 className={c.HeaderText}>132</h1>
                                    </div>
                                    <div className={c.List}>
                                        <CheckBox/>
                                        <img src="./images/Services/Spotify.png" alt=""/>
                                        <h1 className={c.NameSound}>Name</h1>
                                        <h1 className={c.HeaderText}>132</h1>
                                    </div>
                                    <div className={c.List}>
                                        <CheckBox/>
                                        <img src="./images/Services/Spotify.png" alt=""/>
                                        <h1 className={c.NameSound}>Name</h1>
                                        <h1 className={c.HeaderText}>132</h1>
                                    </div>

                                </div>
                            </div>
                            {/*<NavLink className={c.ButtonSync} to="#">*/}
                            {/*    <Button title="Синхронизировать треки"/>*/}
                            {/*</NavLink>*/}
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Choose;
