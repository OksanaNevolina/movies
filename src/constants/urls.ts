const baseURl = 'https://api.themoviedb.org/3'


const discover = '/discover'
const movie = '/movie'
const genre = '/genre'
const list = '/list'
const search = '/search'
const keyword = '/keyword'




const urls = {
    movie:{
        base:():string => `${discover}/${movie}`,
        byId:(id:number):string => `${movie}/${id}`,

    },
    genre:():string => `${genre}/${movie}/${list}`,
    search:():string => `${search}/${keyword}`
}




export {
    baseURl,
    urls
}