import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.Logo}>The MovieDB</div>
            <div  className={css.Navlink}>
                <NavLink to={'/movies'}>MOVIES</NavLink>
                <NavLink to={'/genres'}>GENRES</NavLink>
                <NavLink to={'/search'}>SEARCH</NavLink>
            </div>
            <div className={css.User}>юзер</div>
        </div>

    );
};

export {
    Header
}