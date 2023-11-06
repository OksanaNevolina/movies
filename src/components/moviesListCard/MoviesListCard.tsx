import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import css from './MoviesListCard.module.css'
import {Box, Rating, Typography} from "@mui/material";
import {MovieInfo} from "../movieInfo";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const MoviesListCard:FC<IProps> = ({movie}) => {
    const {original_title,poster_path,vote_average,id} = movie;

    const poster:string = 'https://image.tmdb.org/t/p/w500'

    const navigate = useNavigate();


    return (
            <div className={css.CardMovie} onClick={()=> navigate(id.toString(),{state:movie})}>
                <img className={css.Img} src={`${poster}/${poster_path}`} alt="original_title"/>
                <h3>{original_title}</h3>
                <Typography component="legend"></Typography>
                <Rating name="read-only" value={vote_average} readOnly  max={10}/>
            </div>

    );
}

export {
    MoviesListCard
};