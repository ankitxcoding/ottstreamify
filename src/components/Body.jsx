import PopularMoviesList from "./PopularMoviesList";

const Body = () => {
  return (
    <div>
      <div>
        <PopularMoviesList />
      </div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url("/assets/bg1.jpg")' }}
      ></div>
    </div>
  );
};
export default Body;
