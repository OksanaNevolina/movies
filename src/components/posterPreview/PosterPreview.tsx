import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {moviesService} from "../../services";
import {Photo} from "../Photo";
import css from './PosterPreview.module.css'


const PosterPreview = () => {
    const [photos,setPhotos] = useState([]);
    const {movie_id} = useParams();

    useEffect(()=>{
        moviesService.getImg(+movie_id).then(({data})=> setPhotos(data.posters))
    },[movie_id])
    console.log(photos)
    
    return (
        <div className={css.PosterPhoto}>
            <div>{photos.map((photo,index)=><Photo key={index} img={photo}/>)}</div>
        </div>
    );
};

export {
    PosterPreview
};