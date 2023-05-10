import { UlStyled, HeaderStyled, LiStyled, LinkStyled } from "./Header.styled"
export const Header = () => {
    return (
        <HeaderStyled>
            <UlStyled>
                <LiStyled>
                    <LinkStyled href="/">Home</LinkStyled>
                </LiStyled>
                <LiStyled>
                    <LinkStyled href="/movies">Movies</LinkStyled>
                </LiStyled>
            </UlStyled>
        </HeaderStyled>
    )
}