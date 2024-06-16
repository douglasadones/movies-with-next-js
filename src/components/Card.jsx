import Image from "next/image";
import Link from "next/link";

export default function Card({ result, genres }) {

    const getGenreNames = (genreIds) => {
        if (!genreIds || genreIds.length === 0) {
            return "not informed";
        }

        const names = genreIds.map(id => {
            const genre = genres.find(genre => genre.id === id);
            return genre ? genre.name : null;
        }).filter(name => name !== null);

        return names.length > 0 ? names.join(', ') : "not informed";
    };

    const imagePlaceHolder = '/imagePlaceHolder.svg';

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = imagePlaceHolder;
    };

    const imagePath = result.backdrop_path || result.poster_path;
    const imageUrl = imagePath ? `https://image.tmdb.org/t/p/original/${imagePath}` : imagePlaceHolder;


    return (
        <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 p-2 transition-shadow duration-200">
            <Link href={`/movie/${result.id}`}>
                <h2 className="text-l font-bold truncate">
                    {result.title || result.name}
                </h2>
                <Image src={imageUrl}
                    width={500}
                    height={300}
                    className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
                ></Image>
                <div className="">
                    <p className="line-clamp-3 text-md overflow-y-scroll"><span className="font-bold">Overview:</span> {result.overview}</p>
                    <p>
                        <span className="font-bold">Release date:</span> {result.release_date || result.first_air_date}
                    </p>
                    <p>
                        <span className="font-bold">Media Type:</span> {result.media_type || result.first_air_date}
                    </p>
                    <p>
                        <span className="font-bold">Genre:</span> {getGenreNames(result.genre_ids)}
                    </p>
                </div>
            </Link>
        </div>
    )
}
