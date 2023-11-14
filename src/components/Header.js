import React from "react";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = (props) => {
  const [isHovering, setHovering] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //UNsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div
      className={`fixed w-full px-20 z-[30] flex justify-between ${
        scrolled ? "bg-black" : "bg-gradient-to-b from-black"
      }`}
    >
      <img className="w-[135px]" src={LOGO} alt="logo" />
      {props.showProfileIcon && (
        <div
          className="flex cursor-pointer bottom-5 border-black px-3 py-3"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <img className="w-8 h-8 absolute" src={user?.photoURL} alt="logo" />
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
