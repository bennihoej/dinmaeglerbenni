import { styled } from "styled-components";
import { Link } from 'react-router-dom';

const StyledTopline = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #162A41;
color: white;
`

const StyledMiddlediv= styled.div`
margin-right: 30em;
`

const Topline = () => {
    return (
    <StyledTopline>
<div>
    <p><i class="fa-solid fa-paper-plane"></i>4000@dinmaegler.com</p>
</div>
<StyledMiddlediv>
    <p><i class="fa-solid fa-phone"></i>+45 7070 4000 </p>
</StyledMiddlediv>
<div>
<p><Link to="/Login"><i class="fa-solid fa-user"></i>Log ind</Link></p>
</div>
</StyledTopline>

    );
};

export default Topline;

