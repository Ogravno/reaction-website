import React from "react";
import LoginForm from './LoginForm'
import './Login.css';

export default function Login() {
    return (
    <div id="container">
        <div id="loginContainer">
            <h1>Logg inn</h1>
            <LoginForm />
        </div>
    </div>
    )
}