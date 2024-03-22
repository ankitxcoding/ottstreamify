import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

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
          path: "/movie/:movieId",
          element: <MovieDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
