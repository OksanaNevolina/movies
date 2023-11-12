import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "../userInfo";
import {Switch} from "@mui/material";
import {Context} from "../hoc";

const Header = () => {
    const {theme,setTheme} = useContext(Context);
    return (
        <div className={css.Header}>
            <div className={css.Logo}>The MovieDB</div>
            <div  className={css.Navlink}>
                <NavLink to={'/movies'}>MOVIES</NavLink>
                <NavLink to={'/genres'}>GENRES</NavLink>
                <NavLink to={'/search'}>SEARCH</NavLink>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div >
                    <Switch
                        checked={theme}
                        onChange={setTheme}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <div className={css.User}>
                    <div >{<UserInfo/>}</div>
                    <div>user</div>
                </div>
            </div>


        </div>

    );
};

export {
    Header
}