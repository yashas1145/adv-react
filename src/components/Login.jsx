import React from "react";
import Input from "./Input";

function renderSignup () {
    return <form>
        <Input type="text" id="username" placeholder="Your user id..."/>
        <Input type="password" id="password" placeholder="Your password..."/>
        <Input type="password" id="password" placeholder="Confirm password..."/>
        <Input type="Submit" value="Signup"/>
    </form>
}

function renderLogin() {
    return <form>
        <Input type="text" id="username" placeholder="Your user id..."/>
        <Input type="password" id="password" placeholder="Your password..."/>
        <Input type="Submit" value="Log in"/>
    </form>
}

function Login (props) {
    return <div>
        {props.registered ? renderLogin() : renderSignup()}
    </div>
}

export default Login;