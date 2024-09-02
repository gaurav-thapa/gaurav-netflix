import React, { useState } from "react";
import { APP_NAME } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gptSearchSliceActions } from "../store/gptSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  if (!user) {
    return;
  }

  const showMenuHandler = () => {
    setShowMenu(true);
  };
  const hideMenuHandler = () => {
    setShowMenu(false);
  };
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  const toggleGptSearchViewHandler = () => {
    dispatch(gptSearchSliceActions.toggleSearchView());
  };
  return (
    <div className="z-10 flex justify-between items-center gap-4 p-4 bg-gradient-to-b from-black to-transparent text-white">
      <div className="text-nowrap gap-4 items-center">
        <div className="text-red-600 flex  font-bold text-2xl">{APP_NAME}</div>
      </div>
      <div className="flex gap-10">
        <div>
          <button
            onClick={toggleGptSearchViewHandler}
            className="text-nowrap bg-purple-600 hover:bg-purple-700 py-1 px-2 rounded-lg"
          >
            GPT Search
          </button>
        </div>
        <div
          className="relative"
          onMouseOut={hideMenuHandler}
          onMouseOver={showMenuHandler}
        >
          <div className="flex gap-2 items-center">
            <img
              className="w-8 rounded"
              src={user.photoURL}
              alt={user.displayName}
            />
            &#9660;
          </div>

          <div
            className={`${
              showMenu ? "absolute" : "hidden"
            } py-2 px-4 right-0 bg-black rounded text-nowrap ease-in-out duration-300`}
          >
            <button onClick={logoutHandler} className=" font-bold">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
