import medarbejderbillede from '../assets/grant.png'
import styled from 'styled-components'

const StyledMedarbejdercontainer= styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 30px;
margin-top: 60px;
`

const Medarbejderlist = () => {
    return (
<StyledMedarbejdercontainer>
    <div>
        <img src={medarbejderbillede} alt="Grant" />
        <p>Grant Marshall</p>
        <span>Ejendomsmægler, MDMS </span>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <div>  
        <img src={medarbejderbillede} alt="Grant" />
        <p>Grant Marshall</p>
        <span>Ejendomsmægler, MDMS </span>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <div>
        <img src={medarbejderbillede} alt="Grant" />
        <p>Grant Marshall</p>
        <span>Ejendomsmægler, MDMS </span>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <div>
        <img src={medarbejderbillede} alt="Grant" />
        <p>Grant Marshall</p>
        <span>Ejendomsmægler, MDMS </span>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <div>  
        <img src={medarbejderbillede} alt="Grant" />
        <p>Grant Marshall</p>
        <span>Ejendomsmægler, MDMS </span>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <div>
        <img src={medarbejderbillede} alt="Grant" />
        <p>Grant Marshall</p>
        <span>Ejendomsmægler, MDMS </span>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-linkedin-in"></i>
    </div>
</StyledMedarbejdercontainer>
    );
};

export default Medarbejderlist;