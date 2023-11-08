const baseURl = 'https://api.themoviedb.org/3'


const discover = '/discover'
const movie = '/movie'
const genre = '/genre'
const list = '/list'
const search = '/search'
// const keyword = '/keyword'
const images = '/images'
const poster:string = 'https://image.tmdb.org/t/p/w500'




const urls = {
    movie:{
        base:():string => `${discover}/${movie}`,
        byId:(id:number):string => `${movie}/${id}`,
        images:(id:number):string => `${movie}/${id}/${images}`,


    },
    genre:():string => `${genre}/${movie}/${list}`,
    search:():string => `${search}/${movie}`,
    poster:(photo:string): string=>`${poster}/${photo}`
}




export {
    baseURl,
    urls
}