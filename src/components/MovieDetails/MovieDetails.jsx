import { Link } from "react-router-dom"

export const MovieDetails = () => {
    return (
        <div>
        <aside>
            <img src="/" alt="/" />
        </aside>
        <h2>(Movie Name)</h2>
        <p>User scrore: ()</p>
        <h3>Overview</h3>
        <p>(Movie desc)</p>
        <h4>Genres</h4>
            <p>(Genres)</p>
            <button><Link to="/movies">Go Back</Link></button>
        </div>
        
    )
}