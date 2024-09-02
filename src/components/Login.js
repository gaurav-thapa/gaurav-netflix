import React, { useState } from "react";
import { isValidLoginData } from "../utils/validate";
import { APP_NAME } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [uiErrorMessage, setUiErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  const toggleFormHandler = () => {
    setIsLoginForm((prev) => !prev);
  };
  const onsubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUiErrorMessage(null);
    const formData = new FormData(e.target);
    const { name, email, password } = Object.fromEntries(formData);
    setUiErrorMessage(isValidLoginData(name, email, password));
    if (uiErrorMessage) {
      setIsSubmitting(false);
      return;
    }
    if (!isLoginForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          //   const user = userCredential.user;
          // ...
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "https://avatars.githubusercontent.com/u/54789289?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...

              // navigate("/");
            })
            .catch((error) => {
              // An error occurred
              // ...

              const errorCode = error.code;
              const errorMessage = error.message;
              // setUiErrorMessage(error);
              setUiErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setUiErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    if (isLoginForm) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in

          // navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setUiErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    setIsSubmitting(false);
  };
  return (
    <form
      onSubmit={onsubmitHandler}
      className="relative h-screen w-screen flex justify-center items-center "
      style={{ backgroundImage: "url('/no-auth.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="text-red-600  font-bold text-4xl absolute top-0 left-0 m-10 z-10">
        {APP_NAME}
      </div>
      <div className="bg-black bg-opacity-85 text-white flex flex-col p-10 rounded container sm:w-2/3 lg:w-1/3 z-10">
        <div className="text-3xl font-bold mb-6">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </div>
        {uiErrorMessage && (
          <div className="bg-yellow-600 rounded mb-5 p-3 text-black">
            {uiErrorMessage}
          </div>
        )}
        {isLoginForm ? (
          ""
        ) : (
          <input
            type="text"
            name="name"
            className="bg-black border-2  mb-5 rounded p-3"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          name="email"
          className="bg-black border-2  mb-5 rounded p-3"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          className="bg-black border-2 mb-5 rounded p-3"
          placeholder="Password"
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-red-600 hover:bg-red-700 rounded p-2 mb-10"
        >
          {isSubmitting ? "Loading..." : isLoginForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="text-gray-300">
          {isLoginForm ? `New to ${APP_NAME}?` : "Already have an Account?"}{" "}
          &nbsp;
          <span
            onClick={toggleFormHandler}
            className="text-white font-bold hover:cursor-pointer"
          >
            {isLoginForm ? "Sign up now." : "Sign In instead"}
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
