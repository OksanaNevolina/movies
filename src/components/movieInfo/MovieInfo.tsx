import React, {useEffect, useState} from 'react';
import {IMovieId} from "../../interfaces";
import {useParams} from "react-router-dom";
import {moviesService} from "../../services";
import {MovieByIdDetaills} from "../movieByIdDetaills";


const MovieInfo = () => {
    // const {state} = useAppLocation<IMovie>();
    const {id} = useParams();


    const [movieDetails,setMovieDetails] = useState<IMovieId>(null);
    useEffect(()=>{
        moviesService.getById(+id).then(({data})=>setMovieDetails(data))
    },[id])

    return (
        <div>
            {movieDetails && <MovieByIdDetaills movieDetails={movieDetails}/>}
        </div>
    );
};

export {
    MovieInfo
};