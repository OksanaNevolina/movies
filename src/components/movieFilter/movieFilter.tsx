import React, {useEffect, useState} from 'react';
import {IMovie} from "../../interfaces";
import {useParams, useSearchParams} from "react-router-dom";

import {moviesService} from "../../services";
import {FilterMovieList} from "../FilterMovieList";
import css from './MovieFilter.module.css'

const MovieFilter = () => {
    const [iMovies,setIMovies] = useState<IMovie[]>([]);

    const [query,setQuery] = useSearchParams({page : '1'});
    const page:string = query.get('page')

    const {id} = useParams();
    useEffect(()=>{
        moviesService.getAll(page).then(({data})=>{
            const qwe = data.results.filter(v=>v.genre_ids[0]===+id)
            const qwe0 = data.results.filter(v=>v.genre_ids[1]===+id)
            const filterM = qwe.concat(qwe0)
            setIMovies(filterM)
        } )
    },[id,page])
    console.log(id)

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

    console.log(iMovies)

    return (
        <div>
            <div className={css.FilterWrap}>
                {iMovies.map(movie => <FilterMovieList key={movie.id} movie={movie} />)}

            </div>
            <div className={css.DivBut}>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
};

export {
    MovieFilter
};