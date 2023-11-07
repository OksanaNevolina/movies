import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayount} from "./layount";
import {PageGenres, PageMovies, PageSearch} from "./pages";
import {MovieInfo, PosterPreview} from "./components";

const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayount/>,
        children:[
            {
                index:true,
                element:<Navigate to={'/movies'}/>
            },
            {
                path:'movies',
                element:<PageMovies/>
            },
            {
                path:'movies/:id',
                element:<MovieInfo/>,
            },
            {
                path:'movie/:movie_id/images',
                element:<PosterPreview/>
            },

            {
              path:'genres' ,
              element:<PageGenres/>
            },
            {
                path:'search',
                element:<PageSearch/>
            }
        ]
    }
])
export {
    router
}