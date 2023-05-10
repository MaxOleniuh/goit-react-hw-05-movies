export const HomePage = ({ movies, original_title }) => {
    return (
        <ul>{movies.map(movie =>
                <li key={movie.id} title={original_title}>
            <a href="/">{ movie.original_title ? movie.original_title : movie.name}</a>
            </li>
        )}</ul>
  )
}
