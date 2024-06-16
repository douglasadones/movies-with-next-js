
import Results from "@/components/Results";
import GenreButton from "@/components/GenreButton";


const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {

  const genre = searchParams.genre || 'fetchTrending';

  const today = new Date().toISOString().split('T')[0];

  const year = new Date().getFullYear();
  const firstDayOfYear = `${year}-01-01`; 
  const lastDayOfYear = `${year}-12-31`;

  const discoverUrl = genre === 'fetchTrending'
    ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.gte=${firstDayOfYear}&primary_release_date.lte=${lastDayOfYear}&page=1`
    : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.lte=${today}&with_genres=${genre}&page=1`;


  const response = await fetch(discoverUrl, { next: { revalidate: 10000 } });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  const results = data.results;

  console.log(results);

  const genresResponse = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const genresData = await genresResponse.json();
  const genresList = genresData.genres;

  console.log(genresList)

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 py-5">
        {genresList.map((genre) => (
          <GenreButton key={genre.id} genreId={genre.id} genreName={genre.name} />
        ))}
      </div>
      <Results results={results} genres={genresList} />
    </div>
  )
}