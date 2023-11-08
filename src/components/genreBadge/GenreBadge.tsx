import React, {useEffect, useState} from 'react';
import {genreService} from "../../services";
import {GenresInfo} from "../GenresInfo";
import {IGenre} from "../../interfaces";
import  css from './GenreBadge.module.css'
const GenreBadge = () => {
    const [genres,setGenres] = useState<IGenre[]>([]);
    useEffect(()=>{
        genreService.getAllG().then(({data })=>setGenres(data.genres))
    },[])
    console.log(genres)
    return (
        <div className={css.GenreWrap}>
            {genres.map(genre=><GenresInfo key={genre.id} genre={genre}/>)}

        </div>
    );
};

export {
    GenreBadge
};