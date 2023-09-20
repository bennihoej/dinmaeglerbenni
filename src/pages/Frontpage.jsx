import boligbillede1 from '../assets/MaskGroup1.png'
import boligbillede2 from '../assets/MaskGroup2.png'
import boligbillede3 from '../assets/MaskGroup3.png'
import boligbillede4 from '../assets/MaskGroup4.png'
import maeglerforside1 from '../assets/Imagefrontpage.png'
import styled from 'styled-components'

const FollowDanishcontainer= styled.div`
display: flex;
margin-top: 60px;
`

const StyledPreviewboligerbackground= styled.div`
background-color: #F8F8FB;
`

const StyledPreviewboligercontainer= styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 30px;
margin-top: 60px;
`

const StyledTilmednyhedsbrevcontainer= styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 30px;
margin-top: 60px;
`

const Previewboligliste = () => {
    return (
<section>
    {/* Hero */}
    <div>
        <h2>
            Søg efter din drømmebolig
        </h2>
        <div>
<p>Søg blandt 158 boliger til salg i 74 butikker</p>
<p>Hvad skal din næste bolig indeholde</p>                 
    <input type='text' placeholder='Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende'></input>  
    <button>Søg</button>   
        </div>
    </div>

{/* Under Hero */}

<FollowDanishcontainer>
    <div>
    <img src={maeglerforside1} alt="Maegler Forside"/>
    </div>
    <div>
        <h3>Vi har fulgt danskerne hjem i snart 4 årtier</h3>
<p>Det synes vi siger noget om os!</p>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
<p><i class="fa-solid fa-house"></i>4829</p>
<p>boliger solgt</p>
<p><i class="fa-solid fa-house"></i>158</p>
<p>boliger til salg</p>
    </div>
</FollowDanishcontainer>
<hr />
<FollowDanishcontainer>
    <div>
        <p><i class="fa-solid fa-dollar-sign"></i>Bestil et salgstjek</p>
        <p>Med et Din Mægler Salgstjek 
bliver du opdateret på værdien 
af din bolig.</p>
    </div>
    <div>
        <p><i class="fa-solid fa-location-dot"></i>74 butikker</p>
        <p>Hos Din Mægler er din bolig 
til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
    </div>
    <div>
        <p><i class="fa-solid fa-user"></i>Tilmed køberkartotek</p>
        <p>Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
    </div>
</FollowDanishcontainer>


{/* PreviewBoliger */}

<StyledPreviewboligerbackground>
    <h2>Udvalgte Boliger</h2>
    <span>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</span>
    <StyledPreviewboligercontainer>
    <div> <img src={boligbillede1} alt="Roskilde Bolig"/>
    <h3>Klosterengen 234</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
    </div>
    <div> <img src={boligbillede2} alt="Roskilde Bolig" />
    <h3>Lønbjergparken 22 • Vindinge</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
    </div>
    <div> <img src={boligbillede3} alt="Roskilde Bolig" />
    <h3>Fjordager 234 • Gevninge</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
    </div>
    <div> <img src={boligbillede4} alt="Roskilde Bolig" />
    <h3>Sivholmvej 123 • Veddelev</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
    </div>
    </StyledPreviewboligercontainer>
<p>Se alle boliger</p>
</StyledPreviewboligerbackground>

{/* Tilmed nyhedsbrev */}

<StyledTilmednyhedsbrevcontainer>
<p>Tilmeld dig vores nyhedsbrev og 
hold dig opdateret på boligmarkedet</p>
<input type="text" placeholder='Indtast din email adresse' />
<i class="fa-solid fa-arrow-right"></i>
</StyledTilmednyhedsbrevcontainer>





</section>

    );
};

export default Previewboligliste;