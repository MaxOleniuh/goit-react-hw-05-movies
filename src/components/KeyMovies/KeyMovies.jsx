
export const KeyMovies = ({ keyMovies }) => {
    console.log(keyMovies)
    return (
        <div>
        <ul>{keyMovies.map(keyMovie =>
            <li key={keyMovie.id} title={keyMovie.title}>
            <a href="/">{keyMovie.title}</a>
            </li>
            )}</ul>
            </div>
  )
}