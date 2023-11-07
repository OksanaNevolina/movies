import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {moviesService} from "../../services";
import {Photo} from "../Photo";


const PosterPreview = () => {
    const [photos,setPhotos] = useState([]);
    const {movie_id} = useParams();

    useEffect(()=>{
        moviesService.getImg(+movie_id).then(({data})=> setPhotos(data.posters))
    },[movie_id])
    console.log(photos)
    
    return (
        <div>
            <div>{photos.map((photo,index)=><Photo key={index} img={photo}/>)}</div>
        </div>
    );
};

export {
    PosterPreview
};