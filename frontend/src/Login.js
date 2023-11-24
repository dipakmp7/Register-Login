import React from "react";

function Login (){
    return (
        <div>
            <div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Your Email"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Your Password"></input>
                    </div>
                    <button className="btn btn-success">Login</button>
                    <p>You are agree to our term and policies</p>
                    <button className="btn btn-default border">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login