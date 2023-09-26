import boligbillede1 from '../assets/MaskGroup1.png'
import boligbillede2 from '../assets/MaskGroup2.png'
import boligbillede3 from '../assets/MaskGroup3.png'
import boligbillede4 from '../assets/MaskGroup4.png'
import maeglerforside1 from '../assets/Imagefrontpage.png'
import medarbejderbillede from '../assets/grant.png'
import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const FollowDanishcontainer= styled.div`
display: flex;
margin-top: 60px;
`

const StyledPreviewboligerbackground= styled.div`
background-color: #F8F8FB;
margin-bottom: 10em;
`

const Styledpreviewbuttondiv= styled.div`
width: 178px;
height: 62px;
background-color: #162A41;
margin-top: 60px;
`

const Styledpreviewbuttonp= styled.p`
color: white;
`

const StyledPreviewboligercontainer= styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 30px;
margin-top: 60px;
`
const StyledBoligcontainer= styled.div`
width: 540px;
height: 446px;
margin: 0 auto;
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const StyledBoligcontainerbottom= styled.div`
display: flex;
justify-content: space-between;
`

const StyledTilmednyhedsbrevcontainer= styled.div`
display: flex;
gap: 30px;
margin-top: 60px;
`

const StyledMedarbejdercontainer= styled.div`
display: flex;
gap: 30px;
margin-top: 60px;
`

const StyledOpdatercontainer= styled.div`
display: flex;
background-color: #162A41;
color: white;
`

const StyledOpdaterphonecontainer= styled.div`
display: flex;
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
    <StyledBoligcontainer> <img src={boligbillede1} alt="Roskilde Bolig"/>
    <h3>Klosterengen 234</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <StyledBoligcontainerbottom>
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
    </StyledBoligcontainerbottom>
    </StyledBoligcontainer>
    <StyledBoligcontainer> <img src={boligbillede2} alt="Roskilde Bolig" />
    <h3>Lønbjergparken 22 • Vindinge</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <StyledBoligcontainerbottom>
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
    </StyledBoligcontainerbottom>
    </StyledBoligcontainer>
    <StyledBoligcontainer> <img src={boligbillede3} alt="Roskilde Bolig" />
    <h3>Fjordager 234 • Gevninge</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <StyledBoligcontainerbottom>
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
    </StyledBoligcontainerbottom>
    </StyledBoligcontainer>
    <StyledBoligcontainer> <img src={boligbillede4} alt="Roskilde Bolig" />
    <h3>Sivholmvej 123 • Veddelev</h3>
    <p>4000 Roskilde</p>
    <p><span>Villa • </span>Ejerudgift: 4.567 kr.</p>
    <hr />
    <StyledBoligcontainerbottom>
    <p><i></i>4 værelser • 156 m²</p>
    <p>Kr. 4.567.890</p>
    </StyledBoligcontainerbottom>
    </StyledBoligcontainer>
    </StyledPreviewboligercontainer>
    <Link to="/Listview"><Styledpreviewbuttondiv><Styledpreviewbuttonp>Se alle boliger</Styledpreviewbuttonp></Styledpreviewbuttondiv></Link>
    

</StyledPreviewboligerbackground>

{/* Tilmed nyhedsbrev */}

<StyledTilmednyhedsbrevcontainer>
<p>Tilmeld dig vores nyhedsbrev og 
hold dig opdateret på boligmarkedet</p>
<input type="text" placeholder='Indtast din email adresse' />
<i class="fa-solid fa-arrow-right"></i>
</StyledTilmednyhedsbrevcontainer>

{/* Medarbejdere */}

<div>
<h2>Mød vores engagerede medarbejdere</h2>
<span>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</span>
<StyledMedarbejdercontainer>
<div><img src={medarbejderbillede} alt="Grant" />
<p>Grant Marshall</p>
<span>Ejendomsmægler, MDMS </span>
<i class="fa-solid fa-envelope"></i>
<i class="fa-brands fa-linkedin-in"></i>
</div>
<div><img src={medarbejderbillede} alt="Grant" />
<p>Grant Marshall</p>
<span>Ejendomsmægler, MDMS </span>
<i class="fa-solid fa-envelope"></i>
<i class="fa-brands fa-linkedin-in"></i>
</div>
<div><img src={medarbejderbillede} alt="Grant" />
<p>Grant Marshall</p>
<span>Ejendomsmægler, MDMS </span>
<i class="fa-solid fa-envelope"></i>
<i class="fa-brands fa-linkedin-in"></i>
</div>
</StyledMedarbejdercontainer>
<div>
<Link to="/Medarbejderlist"><p>Se alle mæglere</p></Link>
</div>
</div>

{/* Hold dig opdateret */}

<StyledOpdatercontainer>
<div>
<h2>Hold dig opdateret 
på salgsprocessen</h2>
<p>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
<button><i class="fa-solid fa-play"></i>Google Play</button>
<button><i class="fa-brands fa-apple"></i>Apple Store</button>
</div>
<StyledOpdaterphonecontainer>
    <img src={phone1} alt="phone1billede" />
    <img src={phone2} alt="phone2billede" />
</StyledOpdaterphonecontainer>
</StyledOpdatercontainer>


</section>

    );
};

export default Previewboligliste;