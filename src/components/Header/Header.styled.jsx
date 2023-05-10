import s from "@emotion/styled";

export const HeaderStyled = s.header `
    box-shadow: 0px 1px 6px 0px rgba(97,97,97,1);
`
export const UlStyled = s.ul `
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 20px 30px;
`
export const LiStyled = s.li `

`
export const LinkStyled = s.a `
   font-size: 18px;
   font-weight: 500;
   text-decoration: none;
   color: #3a3a3a;
   &:hover {
    color: #545454;
   }
   &:active {
    color: red;
   }
`