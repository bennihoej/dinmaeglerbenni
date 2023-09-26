import styled from 'styled-components';
import boligbillede1 from '../assets/MaskGroup1.png'

const StyledMedarbejderbeskrivelsecontainer= styled.div`
display: flex;
`

const Detailboligview = () => {
    return ( 
<section>
    <img src={boligbillede1} alt="Bolig1" />

<div>

<div>
<p>Klosterengen 234</p>
<p>4000 Roskilde</p>
</div>
<div>
<i class="fa-regular fa-image"></i><i class="fa-solid fa-bars"></i><i class="fa-solid fa-location-dot"></i><i class="fa-regular fa-heart"></i>    
</div>
<div>
    <p>Kr. 4.567.890</p>
</div>

</div>
<hr />
<div>
    <table></table>
    <table></table>
    <table></table>
</div>

<StyledMedarbejderbeskrivelsecontainer>
<div>
    <p>Beskrivelse</p>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.</p>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
</div>

<div>
<p>Ansvalig mægler </p>
<div>
    <img src="" alt="" />
    <p>Peter Sørensen</p>
    <p>Statsautoriseret ejendomsmægler</p>
    <p><i class="fa-solid fa-phone"></i>+45 7070 4012</p>
    <p><i class="fa-solid fa-paper-plane"></i>peter@dinmaegler.com</p>
</div>
</div>

</StyledMedarbejderbeskrivelsecontainer>


</section>

     );
};
 
export default Detailboligview;