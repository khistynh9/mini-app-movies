import tmdb from "../configs/tmdb";
import Moviescontainer from "../components/Cardcontainer";
export default function Home({ movies }) {
  return (
    <section className="mt-8">
      <div className="container mx-auto">
        <div className="flex justify-start mb-8">
          <h1 className="font-semibold text-4xl">Now Playing</h1>
        </div>
        <Moviescontainer data={movies} type="movies" />
      </div>
    </section>
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
