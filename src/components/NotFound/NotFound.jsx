import { LinkStyled } from "./NotFound.styled"
const NotFound = () => {
    return (
        <div>
        <h2>Page not found</h2>
            <button type="button"> 
                <LinkStyled href="/">Go Back</LinkStyled>
            </button>
            </div>
    )
}
export default NotFound;