import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {urls} from "../../constants";
import {Rating, Typography} from "@mui/material";

interface Iprops {
    movieSearch:IMovie
}

const QueryMovie:FC<Iprops> = ({movieSearch}) => {
    const {poster_path,release_date,original_title,vote_average} = movieSearch;
    return (
        <div>
            <div>
                <img  src={urls.poster(poster_path)} alt="original_title"/>
                <div>{original_title}</div>
                <div>Release date: {release_date}</div>
                <div> <b>Rating:</b></div>
                <Typography component="legend"></Typography>
                <Rating name="read-only" value={vote_average} readOnly max={10}/>
            </div>

        </div>
    );
};

export {
    QueryMovie
};