import { UlStyled, HeaderStyled, LiStyled, LinkStyled } from "./Header.styled"
export const Header = () => {
    return (
        <HeaderStyled>
            <UlStyled>
                <LiStyled>
                    <LinkStyled to="/">Home</LinkStyled>
                </LiStyled>
                <LiStyled>
                    <LinkStyled to="/movies">Movies</LinkStyled>
                </LiStyled>
            </UlStyled>
        </HeaderStyled>
    )
}