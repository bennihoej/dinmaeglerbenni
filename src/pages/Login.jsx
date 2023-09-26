import { Link } from 'react-router-dom';

const Login = () => {
    return (
<section>

<div>
<h6>Log ind på din konto</h6>
<label htmlFor="">Email</label>
<input type="text" placeholder="Email" />
<label htmlFor="">Password</label>
<input type="text" placeholder="Password" />
<button>Log ind</button>
<p>Log ind med</p>
<button>Google</button><button>Facebook</button><button>Twitter</button>
<p>Har du ikke en bruger?<Link to="/Createlogin"> Opret bruger.</Link></p>

</div>


</section>
    );
};

export default Login;