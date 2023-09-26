import boligbillede1 from '../assets/MaskGroup1.png'
import boligbillede2 from '../assets/MaskGroup2.png'
import boligbillede3 from '../assets/MaskGroup3.png'
import boligbillede4 from '../assets/MaskGroup4.png'
import styled from 'styled-components'

const StyledTopiccontainer= styled.div`

`

const StyledBoligercontainer= styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 30px;
margin-top: 60px;
`

const Listview = () => {
    return ( 
<section>
        <h1>Boliger til salg</h1>
<StyledTopiccontainer>
<div>
    <p>Søg Efter dit drømmehus</p>
    <p>Ejendomstype</p>
    <input type="text" placeholder="Ejendomstype" />
</div>    
<div>
    <p>Pris-interval</p>
</div>
    
</StyledTopiccontainer>

<StyledBoligercontainer>
<div> 
    <img src={boligbillede1} alt="Roskilde Bolig"/>
    <h3>Klosterengen 234</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
</div>
<div> 
    <img src={boligbillede2} alt="Roskilde Bolig" />
    <h3>Lønbjergparken 22 • Vindinge</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
</div>
<div> 
    <img src={boligbillede3} alt="Roskilde Bolig" />
    <h3>Fjordager 234 • Gevninge</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
</div>
<div> 
    <img src={boligbillede4} alt="Roskilde Bolig" />
    <h3>Sivholmvej 123 • Veddelev</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
</div>
<div> 
    <img src={boligbillede1} alt="Roskilde Bolig"/>
    <h3>Klosterengen 234</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
</div>
<div> 
    <img src={boligbillede2} alt="Roskilde Bolig" />
    <h3>Lønbjergparken 22 • Vindinge</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
</div>
<div> 
    <img src={boligbillede3} alt="Roskilde Bolig" />
    <h3>Fjordager 234 • Gevninge</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
</div>
<div> 
    <img src={boligbillede4} alt="Roskilde Bolig" />
    <h3>Sivholmvej 123 • Veddelev</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
</div>

</StyledBoligercontainer>



</section>
     );
};
 
export default Listview;