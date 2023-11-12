import React, {FC, useEffect, useState} from 'react';
import {ICast, IMovieId} from "../../interfaces";
import {Rating, Typography} from "@mui/material";
import {urls} from "../../constants";
import css from './MovieByIdDetaills.module.css'
import {useNavigate} from "react-router-dom";
import {moviesService} from "../../services";
import {Cast} from "../cast";


interface IProps {
    movieDetails:IMovieId
}

const  MovieByIdDetaills:FC<IProps> = ({movieDetails}) => {
const {original_title,overview,genres,release_date,vote_average,poster_path,id,runtime} = movieDetails;

   const [casts,setCasts] = useState<ICast[]>([]);

useEffect(()=>{
    moviesService.getCast(id).then(({data})=>setCasts(data.cast))
},[])

    const navigate = useNavigate();
    return (
        <>
            <div className={css.MovieById}>
                <img  src={urls.poster(poster_path)} alt="original_title" className={css.ImgPoster}/>
                <button onClick={()=>navigate(`/movie/${id}/images`)}>More posters</button>

                <div className={css.info}>
                    <div className={css.original_title}> <b>{original_title}</b></div>
                    <div>{overview}</div>
                    <div> <b>Rating:</b></div>
                    <Typography component="legend"></Typography>
                    <Rating name="read-only" value={vote_average} readOnly max={10} defaultValue={2.5} precision={0.5}/>
                    <div><b>Genres</b>:</div>
                    <div className={css.genre}>{genres.map(genre=><div className={css.genreName}>{genre.name}</div>)}</div>
                    <div>Release date: <b>{release_date} </b></div>
                    <div>Runtime: <b>{runtime} min</b></div>
                </div>
            </div>
            <div>
                <div>Main cast :</div>
                <div className={css.Cast}>{casts.map(cast=><Cast cast={cast}key={cast.id}/>)}</div>
            </div>
        </>

    );
};

export {
    MovieByIdDetaills
};