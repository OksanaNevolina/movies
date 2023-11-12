import React, {useContext} from 'react';
import {Header} from "../components";
import {Outlet} from "react-router-dom";

import css from './MainLayount.module.css'
import {Context} from "../hoc";

const MainLayount = () => {
    const {theme} = useContext(Context);
    return (
        <div className={theme?css.White:css.Black}>
            <Header/>
            <Outlet/>

        </div>
    );
};

export {
    MainLayount
}