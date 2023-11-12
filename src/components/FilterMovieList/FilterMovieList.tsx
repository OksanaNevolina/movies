import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {urls} from "../../constants";
import {Rating, Typography} from "@mui/material";

import css from './FilterMovieList.module.css'
import {useNavigate} from "react-router-dom";

interface Iprops {
    movie:IMovie
}

const FilterMovieList:FC<Iprops> = ({movie}) => {
    const {id,poster_path,release_date,original_title,vote_average} = movie;

    const navigate = useNavigate();

    return (
        <div onClick={()=> navigate(`/movies/${id}`)}>
            <div className={css.PhotoF}>
                <img  src={urls.poster(poster_path)} alt={original_title} className={css.PhotoFImg}/>
                <h4>{original_title}</h4>
                <div>Release date: {release_date}</div>
                <div> <b>Rating:</b></div>
                <Typography component="legend"></Typography>
                <Rating name="read-only" value={vote_average} readOnly max={10} defaultValue={2.5} precision={0.5}/>
            </div>

        </div>
    );
};

export {
    FilterMovieList
};