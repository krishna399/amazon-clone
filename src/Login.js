import React, { useState } from 'react'
import './login.css'
import { Link, useHistory } from "react-router-dom";
import { authenticateService } from './firebase.config';

function Login() {

    /*
     * History helps us to navigate to specific routes 
     * programmatically without affecting the styling of
     * the element that has initiated the push
    */
    const history = useHistory();

    //useState is the hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {

        e.preventDefault();
        authenticateService
            .signInWithEmailAndPassword(email, password)
            .then(response => redirectUser(response))
            .catch(error =>
                alert(error.message));
    };

    const registerUser = (e) => {
        e.preventDefault();
        authenticateService
            .createUserWithEmailAndPassword(email, password)
            .then(response => redirectUser(response))
            .catch(error =>
                alert(error.message));
    };

    const redirectUser = (authResponse) => {
        /* Via the firebase the response comes 
         * back with authentication object
        */
        console.log(authResponse);
        if (authResponse) {
            history.push('/');
        }
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_log.svg.png"
                    alt="Amazon logo for login"
                    className="login_logo" />
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={signIn}
                        className="login_signin">
                        Sign In
                    </button>
                </form>

                <p className="login_disclaimer">
                    By signing in you agree to the AMAZON CLONE Conditions of
                    Use & Sale. Please see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>

                <button
                    onClick={registerUser}
                    className="login_register">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
