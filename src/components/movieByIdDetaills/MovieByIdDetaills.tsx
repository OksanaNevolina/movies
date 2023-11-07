import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {Rating, Typography} from "@mui/material";
import {urls} from "../../constants";
import css from './MovieByIdDetaills.module.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    movieDetails:IMovie
}

const MovieByIdDetaills:FC<IProps> = ({movieDetails}) => {
const {original_title,overview,genre_ids,release_date,vote_count,vote_average,poster_path,id} = movieDetails;

const navigate = useNavigate();
    return (
        <div className={css.MovieById}>
            <img  src={urls.poster(poster_path)} alt="original_title" className={css.ImgPoster}/>
            <div className={css.info}>
                <div className={css.original_title}> <b>{original_title}</b></div>
                <div>{overview}</div>
                <div> <b>Rating:</b></div>
                <Typography component="legend"></Typography>
                <Rating name="read-only" value={vote_average} readOnly max={10}/>
                <div>Genres:</div>
                <div>genre_ids{genre_ids}</div>
                <div>Release date:{release_date}</div>
                <div>Duration:{vote_count}</div>
                <div>Main cast :</div>
                <button onClick={()=>navigate(`/movie/${id}/images`)}>Main cast</button>
            </div>

        </div>
    );
};

export {
    MovieByIdDetaills
};