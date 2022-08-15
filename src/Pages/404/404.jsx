import React from 'react';
import a from './404.module.scss'
import Button from "../../Components/Button/Button";
import {NavLink} from "react-router-dom";

const Page404 = () => {
    return (
     <div className={a.Page404}>
         <NavLink className={a.link} to="/Import">
             <Button title="Вернуться на главную страницу"/>
         <h1>404</h1>
         <h2>тут нихуя нет</h2>
         </NavLink>
     </div>
);
};

export default Page404;
