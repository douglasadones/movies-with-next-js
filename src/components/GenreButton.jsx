import Link from 'next/link';

const GenreButton = ({ genreId, genreName }) => {
    return (
        <Link href={`/?genre=${genreId}`} passHref>
            <button className="bg-amber-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                {genreName}
            </button>
        </Link>
    );
};

export default GenreButton;