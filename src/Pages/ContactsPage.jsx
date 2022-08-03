import React from 'react';
import TitleName from "../Components/Title.Name/TitleName";
import x from '../Pages/Pages.module.scss';
import {NavLink} from "react-router-dom";
import Button from "../Components/Button/Button";
import SocialBackground from "../Components/SocialBackgroundAnimate/SocialBackground";

const ContactsPage = () => {
    return (
        <div className={x.CentralWrapper}>
            <div className={x.ContactsPageWrapper}>
                {/*Кнопка*/}
                <NavLink  className={x.HomeButton} to="/MainPage">
                    <Button title="Назад"/>
                </NavLink>

                {/*Текст*/}
                <div className={x.TitleSubtitle}>
                    {/*Название*/}
                    <TitleName/>
                    <div className={x.Subtitle1}>Сервис для синхронизации <br/> вашей музыки</div>
                    <div className={x.Subtitle2}>Контакты:</div>
                    <div className={x.IconWrapper}>
                        <a className={x.link} href="vk.com/innv1"><SocialBackground image={"/images/Social Media/inst.png"}/></a>
                        <a className={x.link} href="vk.com/innv1"><SocialBackground image={"/images/Social Media/vk.png"}/></a>
                        <a className={x.link} href="t.me/innv1"><SocialBackground image={"/images/Social Media/tg.png"}/></a>
                    </div>
                    <div className={x.Subtitle3}>sobachiy.deputat2017@yandex.ru</div>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;