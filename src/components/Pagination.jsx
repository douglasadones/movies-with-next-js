function Pagination({ page, setPage }) {
    return (
        <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Página Anterior
            </button>
            <button onClick={() => setPage(page + 1)}>
                Próxima Página
            </button>
        </div>
    );
}