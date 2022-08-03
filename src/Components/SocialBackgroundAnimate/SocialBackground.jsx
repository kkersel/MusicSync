import React from 'react';
import icon from './SocialBackground.module.scss'

const SocialIcons = (props) => {
    return (
        <div className={icon.Wrapper}>
            <div className={icon.Social}>
                <img src= {props.image} alt="icon#"/>
            </div>
        </div>
    );
};

export default SocialIcons;
