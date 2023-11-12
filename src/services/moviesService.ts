import {axiosService, IRes} from "./axiosService";
import {IMovieId, IResCast, IResponseMovies} from "../interfaces";
import {urls} from "../constants";
import {IPhoto} from "../interfaces/InterfacePhoto";

const moviesService ={
    getAll:(page:string):IRes<IResponseMovies> => axiosService.get(urls.movie.base(), {params:{page}}),
    getById:(id:number):IRes<IMovieId>=> axiosService.get(urls.movie.byId(id)),
    getImg:(id:number):IRes<IPhoto>=>axiosService.get(urls.movie.images(id)),
    getCast:(id:number):IRes<IResCast>=>axiosService.get(urls.movie.credits(id))

}

export {
    moviesService
}