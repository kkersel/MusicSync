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
                                <div className={c.WrapperLine}>
                                    
                                </div>
                            </div>
                            <NavLink className={c.ButtonSync} to="#">
                                <Button title="Синхронизировать треки"/>
                            </NavLink>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Choose;
