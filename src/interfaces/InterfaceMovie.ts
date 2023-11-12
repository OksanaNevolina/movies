 interface IMovie {

     adult: boolean,
     backdrop_path: string,
     genre_ids: [
     number,
     number
 ],
     id: number,
     original_language: string,
     original_title: string,
     overview: string,
     popularity: number,
     poster_path: string,
     release_date: string,
     title: string,
     video: boolean,
     vote_average: number,
     vote_count: number
 }
 
 interface IResponseMovies {
     page:number,
     results: IMovie[]
 }
 interface IGenresMovieId {
     id: number,
     name: string
 }


 interface IMovieId {

     adult: boolean,
     backdrop_path: string,
     belongs_to_collection: {
     id: number,
         name: string,
         poster_path: string,
         backdrop_path: string
 },
     budget: number,
     genres: IGenresMovieId[],

     homepage: string,
     id: number,
     imdb_id: string,
     original_language: string,
     original_title: string,
     overview: string,
     popularity: number,
     poster_path: string,
     production_companies: [
     {
         id: number,
         logo_path: string,
         name: string,
         origin_country: string
     },
     {
         id: number,
         logo_path: null,
         name: string,
         origin_country: string
     }
 ],
     production_countries: [
     {
         iso_3166_1: string,
         name: string
     }
 ],
     release_date: string,
     revenue: number,
     runtime: string,
     spoken_languages: [
     {
         english_name: string,
         iso_639_1: string,
         name: string
     },
     {
         english_name: string,
         iso_639_1: string,
         name: string
     }
 ],
     status: string,
     tagline: string,
     title: string,
     video: false,
     vote_average: number,
     vote_count: number
 }

 interface ICast {
     adult: boolean,
     gender: number,
     id: number,
     known_for_department: string,
     name: string,
     original_name: string,
     popularity: number,
     profile_path: string,
     cast_id: number,
     character: string,
     credit_id: string,
     order: number
 }
 interface IResCast {
    id: number,
     cast: ICast[]
 }

 export type {
     IMovie,
     IResponseMovies,
     IMovieId,
     IGenresMovieId,
     IResCast,
     ICast
 }