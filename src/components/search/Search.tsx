import React, {useEffect, useState} from 'react';
import {IMovie, IWord} from "../../interfaces";
import {useSearchParams} from "react-router-dom";
import {searchService} from "../../services";
import {SubmitHandler, useForm} from "react-hook-form";
import {QueryMovie} from "../queryMovie";
import css from './Search.module.css'

const Search = () => {
    const [moviesSearch, setMoviesSearch] = useState<IMovie[]>([]);
    const [queryMovie,setQueryMovie] = useSearchParams({query:'marvel'});
    const query:string = queryMovie.get('query')
    console.log(query)

    const {register,handleSubmit,reset} = useForm<IWord>();

    useEffect(() => {
        searchService.word(query).then(({data}) => {
            setMoviesSearch(data.results)
            reset()
        })
    },[query])

const getWord:SubmitHandler<IWord>=(qwe) => {
    setQueryMovie(prev => {
            prev.set('query',`${qwe.name}`)
            return prev
        })
    console.log(query)
    console.log(moviesSearch)

}


    return (
        <div className={css.Search}>
            <form onSubmit={handleSubmit(getWord)} className={css.SearchForm}>
                <input type="text" {...register('name')} />
                <button>Search</button>
            </form>
            <div className={css.SearchMovie}>{moviesSearch.map((movieSearch)=><QueryMovie key={movieSearch.id} movieSearch={movieSearch}/>)}</div>

        </div>
    );
}

export {
    Search
}