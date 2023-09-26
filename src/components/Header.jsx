import forsidebillede1 from '../assets/dinmaegler.png';
import { styled } from "styled-components";
import { Link } from 'react-router-dom';

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
    <StyledList><Link to="/"><img src={forsidebillede1} alt="Headerbillede" /></Link></StyledList>
    <StyledList><Link to="/Listview"><StyledA href="">Boliger til salg</StyledA></Link></StyledList>
    <StyledList><Link to="/Medarbejderlist"><StyledA href="">Mæglere</StyledA></Link></StyledList>
    <StyledList><Link to="/Favoritboliger"><StyledA href="">Mine favoritter</StyledA></Link></StyledList>
    <StyledList><Link to="/Kontaktos"><StyledA href="">Kontakt os</StyledA></Link></StyledList>
    </StyledUl>
    </StyledNav>
</StyledHeader>
    );
};

export default Header;