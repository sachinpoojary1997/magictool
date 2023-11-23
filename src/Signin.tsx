import { useState } from "react";
import logo from "./assets/logo/magictool-log.png"

// this contains signin page
function Signin() {
    return ( 
    <div className="center flex-col">
        <div className="mt-16">
            <img src={logo} alt="magictool" className="h-16" />
        </div>
        <h1 className="">Welcome Back!</h1>

        <form action="" className="flex flex-col mt-4 gap-y-3 w-96">
        <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-md" />
        <span className=" relative">
        <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-md" />
        <button className=" absolute right-4 top-2 border-l pl-3 border-slate-300">Forgot?</button>
        </span>
        <button className="btn btn-active btn-primary mt-4">Sign in</button>
        </form>
        {/* <a href="/reset" className="mt-2">Forgot your password?</a> */}
    </div> );
}

export default Signin;