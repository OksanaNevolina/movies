 
export interface FilePpath {
    aspect_ratio: number,
    file_path:string,
    height:number,
    iso_639_1:string,
    vote_average:number,
    vote_count:number,
    width:number
}
export interface IPhoto
{
     backdrops:FilePpath [],
     id:number,
     logos:FilePpath [],
     posters:FilePpath []
 }

