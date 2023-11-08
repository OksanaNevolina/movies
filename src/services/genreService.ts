import {axiosService, IRes} from "./axiosService";
import {IGenres} from "../interfaces";
import {urls} from "../constants";

const genreService={
getAllG:():IRes<IGenres>=>axiosService.get(urls.genre())
}
export {
    genreService
}