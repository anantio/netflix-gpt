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
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = (props) => {
  const [isHovering, setHovering] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearchView);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView(true));
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
    //Unsubscribe when component unmounts
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
      {user && (
        <>
          <button
            className=" border border-gray-600 rounded-md p-2 my-2 text-white ml-[80%]"
            onClick={handleGPTSearchClick}
          >
            {!showGPTSearch ? "GPT Search" : "Home"}
          </button>
          {showGPTSearch && (
            <select
              className="border border-gray-600 rounded-md bg-transparent p-2 my-2 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option className="bg-black" key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
        </>
      )}

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
