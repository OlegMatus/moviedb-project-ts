import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {MoviesPage} from "../pages";
import {MovieDetailsPage} from "../pages";
import {GenresPage} from "../pages";
import {GenreBadge, SearchMovie} from "../components";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>,
            },
            {
                path: 'movies/:id',
                element: <MovieDetailsPage/>
            },
            {
                path: 'genres',
                element: <GenresPage/>
            },
            {
                path: 'genres/:id',
                element: <GenreBadge/>
            },
            {
                path: 'searchMovie',
                element: <SearchMovie/>
            }
        ]
    }
]);

export {
    router
}