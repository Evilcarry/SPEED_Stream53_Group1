import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from "../auth/AuthProvider"
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
//const LOGIN_URL = './';

const Login = () => {
    //const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const client = axios.create({
        baseURL: "http://localhost:5000/users"
    })
    
    // TODO: Route with react router to page of choice 
    
    useEffect(() => {
        userRef.current.focus(); // set focus on user input
    }, []) // nothing in dependency array

    // Empty out any error message if the user changes the user state or password state
    useEffect(() => {
        setErrMsg('');   
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent default behaviour of form which is reloading the page. 
        // Don't have to pass the event to the handle submit function, it receives it by default 
        try {
            client.post('', {
                username: user,
                password: pwd
            })
        } catch (err) {

            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Something went wrong');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            { success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a>Go to Home</a>
                    </p>
                </section>
            ) : (
                <section className="userSignUp">

                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>  {/* */}
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username"
                            ref={userRef}
                            autoComplete="off" // doesn't auto input values into the username
                            onChange={(e) => setUser(e.target.value)} // 
                            value={user} // makes it a controlled input, important when clearing form
                            required // make it a required field
                            />
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password"
                            onChange={(e) => setPwd(e.target.value)} // 
                            value={pwd} // makes it a controlled input, important when clearing form
                            required // make it a required field
                            />
                            <button>Sign In</button>
                    </form>
                    {/* 10:18 link to sign in page from other video */}
                </section>
            )}
        </>
    )
}
export default Login