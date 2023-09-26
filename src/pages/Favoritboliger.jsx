import styled from 'styled-components'
import boligbillede1 from '../assets/MaskGroup1.png'

const Favoritboligercontainer= styled.section`
display: grid;
grid-template-columns: repeat(1, 1fr);
gap: 30px;
margin-top: 60px;
`

const Favoritboliger = () => {
    return (
<Favoritboligercontainer>
<div>
<div>
    <img src={boligbillede1} alt="Roskilde Bolig"/>
</div>
<div>
    <h3>Klosterengen 234</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
</div>
<div>    
    <p><i></i>4 værelser • 156 m²</p>
</div>
<div>
    <p>Kr. 4.567.890</p>
<button>Fjern fra favoritter</button>
</div>
</div>
<div>
<div>
    <img src={boligbillede1} alt="Roskilde Bolig"/>
</div>
<div>
    <h3>Klosterengen 234</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
</div>
<div>    
    <p><i></i>4 værelser • 156 m²</p>
</div>
<div>
    <p>Kr. 4.567.890</p>
<button>Fjern fra favoritter</button>
</div>
</div>
</Favoritboligercontainer>
    );
};

export default Favoritboliger;