import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks";
import {IMovie} from "../../interfaces";
import {useParams} from "react-router-dom";
import {moviesService} from "../../services";
import {MovieByIdDetaills} from "../movieByIdDetaills/MovieByIdDetaills";

const MovieInfo = () => {
    const {state} = useAppLocation<IMovie>();
    const {id} = useParams();

    const [movieDetails,setMovieDetails] = useState<IMovie>(null);

    useEffect(()=>{
        if(state){
            setMovieDetails(state)
        }else {
            moviesService.getById(+id).then(({data})=>setMovieDetails(data))
        }
    },[])
    return (
        <div>
            {movieDetails && <MovieByIdDetaills movieDetails={movieDetails}/>}
        </div>
    );
};

export {
    MovieInfo
};