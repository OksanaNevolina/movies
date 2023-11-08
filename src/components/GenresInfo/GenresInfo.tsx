import React, {FC} from 'react';
import {IGenre} from "../../interfaces";
import css from './GenresInfo.module.css'

interface IProps {
    genre:IGenre
}

const GenresInfo:FC<IProps> = ({genre}) => {
    const {name} = genre;
    return (
        <div>
            <div className={css.GenreDiv}>{name}</div>
        </div>
    );
};
export {
    GenresInfo
};