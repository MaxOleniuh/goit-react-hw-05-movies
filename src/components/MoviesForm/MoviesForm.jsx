const MoviesForm = ({changeFilter, query, onHandleSubmit}) => {
    
    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text" placeholder="Search for a movie" onChange={(e) => changeFilter(e)} value={query} />
          { query && <button type="submit">Search</button>}
        </form>
    )
}
export default MoviesForm;