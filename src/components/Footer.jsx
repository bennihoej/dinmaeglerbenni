import { styled } from "styled-components";
import logobillede from '../assets/Dinmaegler.png'
import { Link } from 'react-router-dom';

const StyledFootercontainer= styled.div`
display: flex;
`

const Footer = () => {
    return (
        <section>
<div>
    <img src={logobillede} alt="logo" />
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
</div>

<StyledFootercontainer>   

<div>
<p><i></i><span>Ring til os</span>+45 7070 4000</p>
<p><i></i><span>Send en mail</span>4000@dinmaegler.com</p>
<p><i></i><span>Butik</span>Stændertorvet 78, 4000 Roskilde</p>
<p>Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
</div>
<div>
    <p>Quick Links</p>
    <Link to="/Listview"><a href="">Boliger til salg</a></Link>
    <Link to="/Medarbejderlist"><a href="">Mæglere</a></Link>
    <Link to="/Kontaktos"><a href="">Kontakt os</a></Link>
    <Link to="/Login"><a href="">Log ind / bliv bruger</a></Link>
    <p>Medlem af</p>
    <p>DMS</p>
    <p>Dansk Mægler Sammenslutning</p>
</div>

</StyledFootercontainer>

</section>

    );
};

export default Footer;