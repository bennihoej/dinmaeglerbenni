import styled from 'styled-components'
import Lottie from 'lottie-react';
import error404 from '../assets/error404.json'

const StyledErrorcontainer= styled(Lottie)`
width: 100px;
height: 100px;
`

const Errorview = () => {
    return(
<StyledErrorcontainer animationData={error404} />

    );
};

export default Errorview;