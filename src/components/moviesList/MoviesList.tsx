import React, {useEffect, useState} from 'react';
import {MoviesListCard} from "../moviesListCard";
import {IMovie} from "../../interfaces";
import {useSearchParams} from "react-router-dom";
import {moviesService} from "../../services";
import css from './MoviesList.module.css'

const  MoviesList = () => {
    const [movies,setMovies] = useState<IMovie[]>([]);


    const [query,setQuery] = useSearchParams({page : '1'});
    const page:string = query.get('page')

    useEffect(()=>{
        moviesService.getAll(page).then(({data})=> setMovies(data.results))
    },[page])

    const prev = () => {
        setQuery(prev => {
            prev.set('page',`${+prev.get('page')-1}`)
            return prev
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page',`${+prev.get('page')+1}`)
            return prev
        })
    }

    return (
        <div className={css.Wrap}>
            <div className={css.ListMovie}>
                {movies.map((movie) =><MoviesListCard key={movie.id} movie={movie} />)}
            </div>
            <div>
                <button className={css.ButtonPrevNext} disabled={!query} onClick={prev}>prev</button>
                <button  className={css.ButtonPrevNext} disabled={!query}   onClick={next}>next</button>
            </div>

        </div>

    );
};

export {
    MoviesList
}