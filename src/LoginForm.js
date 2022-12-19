import { useState } from "react";
import $, { event } from "jquery";
import './LoginForm.css'
import { SetUser } from "./features/user/User";
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const API_PATH = 'http://localhost:8888/checkLogin.php'

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [logedIn, setLogedIn] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    if (logedIn == true) {
        SetUser(username)
        navigate('/Home')
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: {
                username: username,
                password: password,
            }
        })

        .then(result => {
            setLogedIn(result.data.sent)
        })

        .catch(error => setError(error.message));
      };

    return (        
        <>
            <div className="container">
                <form action="#">
                    <label>Brukernavn</label>
                    <input type="text" id="username" name="username"
                        value={username}
                        onChange={ e => setUsername(e.target.value) }
                    />

                    <label>Passord</label>
                    <input type="password" id="password" name="password"
                        value={password}
                        onChange={ e => setPassword(e.target.value) }
                    />

                    <input type="submit" value="Logg inn" onClick={e => handleFormSubmit(e)}/>
                </form>
            </div>

         
        </>
    )
}











// export default function Login() {
//     const [username, setUsername] = useState("");

//     const dispatch = useDispatch()

//     return (        
//         <>
//             <form
//             id='loginForm'
//             action='checkLogin.php'
//             method='post'
//             onSubmit={ () => { dispatch(setUser(username)) } }
//             >
//                 <label>Brukernavn:</label>
//                 <input type="text" id="username" name="username"
//                     value={username}
//                     onChange={ e => setUsername(e.target.value) }
//                 />

//                 <label>Passord:</label>
//                 <input type="password" id="password" name="password"
//                 />

//                 <input type="submit" value="Log inn" />
//             </form>
//             <User />
//         </>
//     )
// }