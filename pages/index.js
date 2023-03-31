import tmdb from "../configs/tmdb";
import Moviescontainer from "../components/Cardcontainer";
export default function Home({ movies }) {
  // console.log("ini moviesku", movies);
  return (
    <div className="container">
      <section className="mt-8">
        <Moviescontainer data={movies} type="movies" />
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const movies = await tmdb.discover("movie", [
    {
      param: "now_playing",
      value: "vote_count.desc",
    },
  ]);
  return {
    props: {
      movies: movies.results,
    },
  };
};
