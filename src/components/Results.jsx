import Card from "./Card";

export default function Results({results, genres}) {
    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xlg:grid-cols-5 max-w-6xl mx-auto p-4 w-f">
            {results.map((result) => (
                <Card key={result.id} result={result} genres={genres} />
            ))}
        </div>
    )
}
