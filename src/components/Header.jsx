import forsidebillede1 from '../assets/dinmaegler.png';
import { styled } from "styled-components";

const StyledHeader= styled.header`
background-color: white;
color: #333333;
`

const StyledNav= styled.nav`
display: flex;
`

const StyledUl= styled.ul`
display: flex;
`

const StyledList= styled.li`
list-style-type: none;
`

const StyledA= styled.a`
text-decoration: none;
color: #333333;
`

const Header = () => {
    return (
<StyledHeader>
    <StyledNav>
    <StyledUl>
    <StyledList><img src={forsidebillede1} alt="Headerbillede" /></StyledList>
    <StyledList><StyledA href="">Boliger til salg</StyledA></StyledList>
    <StyledList><StyledA href="">Mæglere</StyledA></StyledList>
    <StyledList><StyledA href="">Mine favoritter</StyledA></StyledList>
    <StyledList><StyledA href="">Kontakt os</StyledA></StyledList>
    </StyledUl>
    </StyledNav>
</StyledHeader>
    );
};

export default Header;