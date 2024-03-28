import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import TVShowDetails from "./components/TVShowDetails";
import PopularMoviesList from "./components/PopularMoviesList";
import PopularTVShowsList from "./components/PopularTVShowsList";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/movies",
          element: <PopularMoviesList />,
        },
        {
          path: "/movies/movie/:movieId",
          element: <MovieDetails />,
        },
        {
          path: "/tvShows",
          element: <PopularTVShowsList />,
        },
        {
          path: "/tvShows/tvShow/:tvShowId",
          element: <TVShowDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
