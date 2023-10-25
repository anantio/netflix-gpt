import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-4 w-full bg-gray-700 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3  my-4 w-full  bg-gray-700 rounded-sm"
        />
        <button className="bg-red-700 rounded-md  p-2 my-10 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <div>
              New to Netflix? <strong>Sign Up Now</strong>
            </div>
          ) : (
            "Already Resgistered? Sign In now"
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
