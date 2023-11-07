import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import css from './MoviesListCard.module.css'
import {Rating, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {urls} from "../../constants";

interface IProps {
    movie: IMovie
}

const MoviesListCard:FC<IProps> = ({movie}) => {
    const {original_title,poster_path,vote_average,id} = movie;
    

    const navigate = useNavigate();


    return (
            <div className={css.CardMovie} onClick={()=> navigate(id.toString(),{state:movie})}>
                <img className={css.Img} src={urls.poster(poster_path)} alt="original_title"/>
                <h3>{original_title}</h3>
                <Typography component="legend"></Typography>
                <Rating name="read-only" value={vote_average} readOnly  max={10}/>
            </div>

    );
}

export {
    MoviesListCard
};