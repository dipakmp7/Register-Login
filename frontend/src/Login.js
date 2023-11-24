import React from "react";

function Login (){
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Your Email" className="form-control rounded-0"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Your Password" className="form-control rounded-0"></input>
                    </div>
                    <button className="btn btn-success w-100">Login</button>
                    <p>You are agree to our term and policies</p>
                    <button className="btn btn-default border w-100 bg-light">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login