import {axiosService, IRes} from "./axiosService";
import {IMovie, IResponseMovies} from "../interfaces";
import {urls} from "../constants";

const moviesService ={
    getAll:(page:string):IRes<IResponseMovies> => axiosService.get(urls.movie.base(), {params:{page}}),
    getById:(id:number):IRes<IMovie>=> axiosService.get(urls.movie.byId(id))

}

export {
    moviesService
}