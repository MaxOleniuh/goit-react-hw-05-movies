import { NavLink } from "react-router-dom";
import { UlStyled, HeaderStyled, LiStyled } from "./Header.styled"
import s from "@emotion/styled";
const StyledLink = s(NavLink)`
      font-size: 18px;
   font-weight: 500;
   text-decoration: none;
   color: #3a3a3a;
   &:hover {
    color: #545454;
   }
   &.active {
    color: #ac0808;
   }
`
export const Header = () => {
    return (
        <HeaderStyled>
            <UlStyled>
                <LiStyled>
                    <StyledLink to="/">Home</StyledLink>
                </LiStyled>
                <LiStyled>
                    <StyledLink to="/movies">Movies</StyledLink>
                </LiStyled>
            </UlStyled>
        </HeaderStyled>
    )
}