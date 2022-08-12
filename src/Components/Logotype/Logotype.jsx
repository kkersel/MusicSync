import React from 'react';
import Logo from './Logotype.module.scss'
import {NavLink} from "react-router-dom";

const Logotype = () => {
    return (
        <div className={Logo.LogotypeWrapper}>
           <div className={Logo.TextWrapper}>
               <NavLink className={Logo.Title} to="/ContactsPage">
                   <h1 className={Logo.Title}>MusicSync</h1>
               </NavLink>
               <h2 className={Logo.Subtitle}>
                   Сервис для <br/>
                   синхронизации <br/>
                   вашей музыки</h2>
           </div>
            {/*<div className={Logo.BGSpinner}></div>*/}
        </div>
    );
};

export default Logotype;
