
export const KeyMovies = ({ keyMovies }) => {
    console.log(keyMovies)
    return (
        <div>
            <h2>Trending Today</h2>
        <ul>{keyMovies.map(keyMovie =>
            <li key={keyMovie.id} title={keyMovie.name}>
            <a href="/">{keyMovie.name}</a>
            </li>
            )}</ul>
            </div>
  )
}