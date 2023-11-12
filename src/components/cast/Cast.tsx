import React, {FC} from 'react';
import {ICast} from "../../interfaces";
import {urls} from "../../constants";
import css from './Cast.module.css'

interface Iprops {
    cast:ICast
}

const Cast:FC<Iprops> = ({cast}) => {
    const {name,original_name,character,profile_path} = cast;

    return (
        <div className={css.CastWrap}>
            <div>
                <img  src={urls.poster(profile_path)} alt={original_name} className={css.Imgcast}/>
            </div>
            <div>{name}</div>
            <div>{character}</div>
         </div>
    );
};

export {
    Cast
}