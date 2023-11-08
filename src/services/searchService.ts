import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants";
import { ISearch} from "../interfaces";

const searchService ={
    word:(query:string):IRes<ISearch>=>axiosService.get(urls.search(),{params: {query}})
}
export {
    searchService
}
