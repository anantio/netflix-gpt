import React from "react";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [isHovering, setHovering] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {props.showProfileIcon && (
        <div
          className="flex cursor-pointer bottom-5 border-black px-3 py-5"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <img
            className="w-10 h-10"
            src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVbYEW3Bkl6g7KkyJmusw_jPAXtpY6KusGOVNs-4v4vTLf6h4kETNq3ApIhFAHL2Dbe1z1T-j8gaEIw5TElx87IQfk791_g.png?r=5eb"
            alt="logo"
          />
          {isHovering && (
            <div className="absolute min-w-[100px] shadow-sm z-[1] text-white font-bold bg-gray-400 top-[80%]">
              <button className="p-2 m-1" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
