import React from 'react';
import x from './ContactsPage.module.scss';
import {NavLink} from "react-router-dom";
import Button from "../../Components/Button/Button";
import SocialBackground from "../../Components/SocialBackgroundAnimate/SocialBackground";
import {Slide, Fade} from "react-reveal";

const ContactsPage = () => {
    return (
            <div className={x.CentralWrapper}>
                <Fade>
                <div className={x.ContactsPageWrapper}>
                    {/*Кнопка*/}
                    <NavLink  className={x.HomeButton} to="/Import">
                        <Button title="Назад"/>
                    </NavLink>

                    {/*Текст*/}
                    <Slide left>
                        <div className={x.TitleSubtitle}>
                            {/*Название*/}
                            <h1 className={x.Text}>MusicSync</h1>
                            <div className={x.Subtitle1}>Сервис для синхронизации <br/> вашей музыки</div>
                            <div className={x.Subtitle2}>Контакты:</div>
                            <div className={x.IconWrapper}>
                                <a className={x.link} href="https://vk.com/innv1"><SocialBackground image={"/images/Social Media/inst.png"}/></a>
                                <a className={x.link} href="https://vk.com/nikita322"><SocialBackground image={"/images/Social Media/vk.png"}/></a>
                                <a className={x.link} href="https://t.me/innv1"><SocialBackground image={"/images/Social Media/tg.png"}/></a>
                            </div>
                            <div className={x.Email}>sobachiy.deputat2017@yandex.ru</div>
                        </div>
                    </Slide>
                </div>
                </Fade>
            </div>
    );
};

export default ContactsPage;
