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

 export type {
     IMovie,
     IResponseMovies
 }